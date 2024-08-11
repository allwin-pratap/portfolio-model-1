import Head from 'next/head';
import { StaticPath } from "@/utils/baseUtils";

type IMetaProps = {
    data: any;
    config?: any;
};

const MetaTag = (props: IMetaProps) => {

    const description = props.data?.meta_description;
    const canonical = props.data?.meta_canonical_url;
    const keywords = props.data?.keywords;
    const title = props.data?.meta_title;
    const ogImage = props.data?.og_image;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {/* <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href={StaticPath('')}
                key="icon32"
            /> */}
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Head>
    );
};

export default MetaTag;
