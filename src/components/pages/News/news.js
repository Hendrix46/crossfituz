import React,{Component} from "react";
import Pagination from "../Blog/pagination";
import _ from 'lodash';
import firebase from "firebase";



class News extends Component {
    constructor() {
        super();
        this.state={
            blogItem: []
        };

        // an example array of items to be paged
        var exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });

        var firebaseExample = firebase.firestore().collection('blogContent').onSnapshot((snanshot)=>{
            const iterationData= snanshot.docs.map((doc)=>
                ({
                    id : doc.id,
                    ...doc.data()
                }));
            this.setState({
                blogItem: iterationData
            })
        });

        this.state = {
            exampleItems: firebaseExample,
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <h1>React - Pagination Example with logic like Google</h1>
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )}
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}
export default News;

