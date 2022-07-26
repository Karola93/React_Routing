import {useParams} from "react-router-dom/cjs/react-router-dom";
import {Fragment} from "react";
import Route from "react-router-dom/es/Route";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning is fun'},
    {id: 'q2', author: 'Maximilian', text: 'Learning is great'},
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;