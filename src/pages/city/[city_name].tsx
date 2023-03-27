import readCityNames from "@/lib/readCityNames";

interface Props {
    cityName: String;
}

export default function City(props: Props) {
    return <h1>City: {props.cityName}</h1>;
};


export async function getStaticPaths() {
    const city_names = await readCityNames();
    const paths = city_names.map((city_name) => ({
        params: { city_name },
    }));
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
  }

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
    return {
        // Passed to the page component as props
        props: { cityName: context.params.city_name },
    }
}
