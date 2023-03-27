import readCityNames from "@/lib/readCityNames";

interface Props {
    cityName: String;
}

export default function City(props: Props) {
    return <h1>City: {props.cityName}</h1>;
};


/*
`getStaticPaths` is a function in Next.js used for generating dynamic routes at build time by specifying paths to pre-render during the build process.
this will create a list of paths with the required parameters for every dynamic page that needs to be statically generated.*/
export async function getStaticPaths() {
    const city_names = await readCityNames();
    const paths = city_names.map((city_name) => ({
        params: { city_name },
    }));
    return {
        paths,
        fallback: false, // The `fallback` key is set to `false`, which means that any path not returned by `getStaticPaths` will result in a 404 page.
    }
  }

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
    return {
        // Passed to the page component as props
        props: { cityName: context.params.city_name },
    }
}
