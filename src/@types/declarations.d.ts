
declare module "*.png" {
  const value: string;
  export default value;
}

declare module '*.json' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.wasm' {
  const content: any;
  export default content;
}
declare module "data:text/javascript,export default 'title'" {
  const value: string;
  export default value
}

declare const IS_PROD: boolean;
declare const IS_DEV: boolean;
declare const IS_DEV_SERVER: boolean;
declare const AUTHOR: string;
