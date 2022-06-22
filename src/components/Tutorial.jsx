import { gql, useQuery } from "@apollo/client";
import { Link, Spinner } from "@shopify/polaris";

export default function Tutorial() {
    const { data, loading } = useQuery(gql`{shop{myshopifyDomain}}`)

    if ( loading ) return <Spinner accessibilityLabel="Small spinner example" size="small" />

    const url = `https://${data.shop.myshopifyDomain}/admin/themes/current/editor?context=apps`
    console.log(url)

    return (
        <Link external url={url}>Click here to activate the app</Link>
    )
}