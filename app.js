var bodyParser   = require("body-parser"),
mongoose         = require("mongoose"),
express          = require("express"),
app              = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/motodb");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

app.get("/",function(req, res){
    res.redirect("/blogs");
});
app.get("/blogs", function(req, res){
    res.render("index");
});


app.listen(3000,function(){
	console.log("Motoblog app started");
});


