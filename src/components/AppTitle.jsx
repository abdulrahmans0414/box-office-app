export default function AppTitle (props){
    const {
        title ="Box Office",
        subtitle ="Are you looking for a movie or an actor?"
    } = props;
    return(
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}