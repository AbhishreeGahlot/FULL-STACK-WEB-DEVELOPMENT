function print()
{
    console.log("hellow world");
    console.log(event);
}

function bye()
{
    console.log("bye");
}
export default function Button()
{
    return(
        <div>
            <button onClick={print}>Click me!</button>
            <p onMouseOver={bye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, expedita quam, quibusdam omnis accusantium, impedit atque obcaecati eius vel cupiditate fuga accusamus ut saepe porro esse fugit maxime earum id.</p>
        </div>
    );
}