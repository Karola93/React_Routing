import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning is fun'},
    {id: 'q2', author: 'Maximilian', text: 'Learning is great'},
];


const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes;