"use client";

import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Icons } from "~/components/icons";
import { IndividualPost } from "~/components/post/post";
import { toast } from "~/components/ui/use-toast";
import { INFINITE_SCROLL_PAGINATION_RESULTS } from "~/config";
import { api } from "~/trpc/react";
import { type Post } from "~/types/db";

export function PostFeed({ initialPosts }: { initialPosts: Post[] }) {
  const lastPostRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  const { mutateAsync: fetchPosts } = api.post.getAll.useMutation({
    onError() {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["infinite-query"],

    queryFn: async ({ pageParam = 1 }) => {
      const posts = await fetchPosts({
        limit: INFINITE_SCROLL_PAGINATION_RESULTS.toString(),
        page: pageParam.toString(),
      });

      return posts;
    },

    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },

    initialPageParam: 1,

    initialData: { pages: [initialPosts], pageParams: [1] },
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchNextPage(); // Load more posts when the last post comes into view
    }
  }, [entry, fetchNextPage]);

  const posts = data?.pages.flatMap((page) => page) ?? initialPosts;

  return (
    <div className="col-span-2 flex flex-col space-y-6">
      {posts?.length ? (
        <div className="grid gap-6 sm:grid-cols-1">
          {posts.map((post, index) => {
            return index === posts.length - 1 ? (
              // Add a ref to the last post in the list
              <div key={post.id} ref={ref}>
                <IndividualPost post={post} />
              </div>
            ) : (
              <div key={post.id}>
                <IndividualPost post={post} />
              </div>
            );
          })}
        </div>
      ) : (
        <p>No posts published.</p>
      )}

      {isFetchingNextPage && (
        <div className="flex justify-center">
          <Icons.spinner className="h-6 w-6 animate-spin text-zinc-500" />
        </div>
      )}
    </div>
  );
}
