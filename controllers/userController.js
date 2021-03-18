import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join",{pageTitle:"Join"});
}
export const postJoin = (req,res) => {

    const {
        body:{name,email,password,password2}
    }= req
    if(password !== password2){
        res.status(400);
        // res.send('<script type="text/javascript">alert("패스워드 오류발생");</script>');
        res.render("join",{pageTitle:"Join"});
    }else{
        //Tp Do: Log User In
        res.redirect(routes.home);
    }
}

export const getLogin = (req, res) => res.render("login",{pageTitle:"Log In"});
export const postLogin = (req,res) =>{
    res.redirect(routes.home)
}

export const logout = (req, res) => {
    //To Do: Process Log Out
   res.redirect("/")
}
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");