export default function Button(props: { [x: string]: any; children: any }) {
    const { children, ...rest } = props
    return <Button className="cream-bg" {...rest}>{children}</Button>
}