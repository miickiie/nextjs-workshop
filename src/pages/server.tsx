import Link from "next/link";
import Image from "next/image";
interface Props {
    url: string;
    type: string;
}
export default function Server(props: Props) {
    const content = props.type == "mp4" ? <video src={props.url} controls></video> : <Image src={props.url} width="300" height="300" alt="meow" />
    return (
        <>
            <h1>This GET from getServerSideProps</h1>
            {content}
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    )
}

// This gets called on every request
export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const res = await fetch('https://meow.senither.com/v1/random/')
    const response = await res.json()

    // Pass data to the page via props
    return { props: response.data }
}
