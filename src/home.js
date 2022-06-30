import AddItem from './components/addItem';
import  {DisplayTransaction}  from './components/displayTransaction';

function Home(props)
{
    return(
        <div>
    <DisplayTransaction list={props.list}/>
    <AddItem Add={props.Add}/>
        </div>
    )
}
export default Home;