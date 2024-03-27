/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { uploadFiles } from "~/lib/uploadthing";

const Code = require("@editorjs/code");
const Embed = require("@editorjs/embed");
const Header = require("@editorjs/header");
const ImageTool = require("@editorjs/image");
const InlineCode = require("@editorjs/inline-code");
const LinkTool = require("@editorjs/link");
const List = require("@editorjs/list");
const Quote = require("@editorjs/quote");
const Table = require("@editorjs/table");

export const editorTools = {
  code: Code,
  embed: Embed,
  header: Header,
  image: {
    class: ImageTool,
    config: {
      uploader: {
        async uploadByFile(file: File) {
          // Upload to uploadthing
          const [res] = await uploadFiles("imageUploader", { files: [file] });

          return {
            success: 1,
            file: {
              url: res?.url,
            },
          };
        },
      },
    },
  },
  inlineCode: InlineCode,
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: "/api/link",
    },
  },
  list: List,
  quote: Quote,
  table: Table,
};
