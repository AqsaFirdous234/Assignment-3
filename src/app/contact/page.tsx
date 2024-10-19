export default function Contact(){
    return(
        <div className="contact">
            <form action="">
                <h1>CONTACT US</h1>
                <input type="text"  id="first name"  placeholder="First Name" required/>
                <input type="text"   id="last name"  placeholder="Last Name" required/>
                <input type="email"   id="email"  placeholder="Email" required/>
                <input type="text" id="Mobile"  placeholder="Mobile #" required/>
                <h4>Type Your Message Here.....</h4>
                <textarea name="" id="" required></textarea>
                <input type="Submit" value="Send" id="button" />
            </form>
        </div>
    
    )
}