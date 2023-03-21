import readCityNames from "@/lib/readCityNames";

const City = ({ cityName }) => {
  return <h1>City: {cityName}</h1>;
};

export default City;

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
export async function getStaticProps(context) {
    return {
        // Passed to the page component as props
        props: { cityName: context.params.city_name },
    }
}
