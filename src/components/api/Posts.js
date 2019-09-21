import React, {Component, Fragment} from 'react';
import Roll from 'react-reveal/Roll';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(API + DEFAULT_QUERY)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ hits: data.hits, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }


    render() {
        const { hits, isLoading, error } = this.state;
        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        const divStyle = {
            display: 'inline-block',
            color: 'blue',
            margin: '0 0 0 0'
        };

        const divStyle1 = {
            float:'left',
            width:'220px',
            margin:'0',
        };

        const divStyle2 = {
            float:'left',
            width:'70%',
            margin:'0',
        };

        const divStyle3 = {
            float:'left',
            width:'100%',
            margin:'0 0 100px 0',
        };

        return (
            <Fragment>
                {hits.map(hit =>
                    <div style={divStyle3}>
                    <Roll left>
                        <div style={divStyle1}>
                        <img src={"/assets/images/333333.png"} alt={"logo"} height={"120px"} />
                        </div>
                    </Roll>
                        <Roll right>
                            <div style={divStyle2}>
                            <a href={hit.url} style={divStyle}>{hit.title}</a>
                                <Roll left>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </Roll>
                            </div>
                        </Roll>

                    </div>

                )}
            </Fragment>
        );
    }
}
export default Posts;
