import { Helmet } from 'react-helmet-async';


export const Head = ({ title = '', description = '' }) => {
    return (
        <Helmet
            title={title ? `${title} | DimanSoft Struct` : undefined}
            defaultTitle="DimanSoft Struct"
        >
            <meta name="description" content={description} />
        </Helmet>
    );
};
