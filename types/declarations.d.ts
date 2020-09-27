declare module '*.css' {
    const content: { readonly [className: string]: string }
    export default content
}

declare module '*.svg' {
    const content: string
    export default content
}

declare module '*.jpg' {
    const content: string
    export default content
}

declare module '*.mdx' {
    const MDXComponent: (props: any) => JSX.Element
    export default MDXComponent
  }
