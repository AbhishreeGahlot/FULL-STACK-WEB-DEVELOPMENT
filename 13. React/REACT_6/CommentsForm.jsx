import {useState} from "react";

export default function CommentsForm({addNewComment}) {
    let [formData , setFormData] = useState ( {
        username:"",
        remarks:"",
        rating:5
    });

    let addNewComment = (comment) =>
    {
    setComments((currComments) => [ ...currComments , comment] );
    }

    let handleInputChange = (event) => {
        setFormData((currData) => {
           return { ...currData , [event.target.name]: event.target.value} ;
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
    };

    return (
        <div>
            <h4>Give a comment</h4>  
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> enter username &nbsp; &nbsp; &nbsp;</label>
              <input type="text" placeholder="username" value={formData.username}  onChange={handleInputChange} name="username"/> 
              <br /> <br />
              <label htmlFor="remarks">enter remark &nbsp;</label>
              <textarea  placeholder = "enter remarks"value={formData.remarks} onChange={handleInputChange} name="remark"></textarea>
              <br /><br />
              <label htmlFor="rating"> give your rating 1-5 &nbsp;</label>
              <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} name="rating"/>  
              <br /><br />
              <button>Add a comment </button>
            </form> 
            <CommentsForm addNewComment={addNewComment}/>
        </div>
    )
}