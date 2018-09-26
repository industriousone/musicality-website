import React from 'react';

import Article_Welcome from '../articles/Welcome';
import Article_20170927 from '../articles/20170927-High-Sierra-Update';

const getQueryStringParams = query => {
    return query
        ? (/^[?#]/.test(query) ? query.slice(1) : query)
            .split('&')
            .reduce((params, param) => {
                let [key, value] = param.split('=');
                params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                return params;
            }, {}
            )
        : {};
};

class NewsPage extends React.Component {
    render() {
        const params = typeof window !== 'undefined' ? getQueryStringParams(window.location.search.substring(1)) : '';

        switch (params.op) {
            case 'Welcome':
                return <Article_Welcome />;

            case '20170927-High-Sierra-Update':
                return <Article_20170927 />;

            default:
                return (<p>Not found</p>);
        }
    }
}

export default NewsPage;
