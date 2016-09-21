var colors = {
  "green": "#81e095",
  "purple": "#d9a0eb",
  "red": "#f76379",
  "blue": "#80d2ff",
  "pink": "#ffa1ba",
  "orange": "#fa9866",
  "yellow": "#f9ffb3",
  "darkYellow": "#ffd485",
  "darkGreen": "#6dbfba",
  "darkBlue": "#8098ff"
};

var width = 1180,
    height = 700,
    root;

var force = d3.layout.force()
    .size([width, height])
    .on("tick", tick);

var svg = d3.select("#tree").append("svg")
    .attr("width", width)
    .attr("height", height);

var svg2 = d3.select("#legend").append("svg")
    .attr("width", 500)
    .attr("height", 800);

var link = svg.selectAll(".link"),
    node = svg.selectAll(".node"),
    node2 = svg2.selectAll(".node");

var tooltip = d3.select("body")
  .append("div")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden")
  .style("color", "white")
  .style("padding", "8px")
  .style("background-color", "rgba(0, 0, 0, 0.75)")
  .style("border-radius", "6px")
  .style("font", "12px sans-serif")
  .text("tooltip");

function tick() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

// d3.json("survey1.json", function(error, json){
//   if (error) throw error;

//   root = json;
//   root.fixed = true;
//   root.x = w / 2;
//   root.y = h / 2 - 80;
//   update();
// });
var json = {
  "name": "Personality", "size": 15000,
   "children": [
    {"name": "Conscientiousness", "size": 3500, 
      "children": [
      {"name": "Achievement", "size": 5000, "parent": "Conscientiousness", "author": "Cici"},
      {"name": "Industriousness", "size": 2000, "parent": "Conscientiousness", "author": "Cici"},
      {"name": "Order", "size": 5000, "parent": "Conscientiousness", "author": "Cici"},
      {"name": "orderly", "size": 2000, "parent": "Conscientiousness", "author": "Cici"},
      {"name": "tidy", "size": 2000, "parent": "Conscientiousness", "author": "Cici"},
      {"name": "neat", "size": 2000, "parent": "Conscientiousness", "author": "Cici"},
      {"name": "well-organized", "size": 2000, "parent": "Conscientiousness", "author": "Cici"},
      {"name": "Self-control", "size": 2000, "parent": "Conscientiousness", "author": "Cici"},

      {"name": "Decisiveness", "size": 2000, "parent": "Conscientiousness", "author": "Alex"},
      {"name": "Responsibility", "size": 2000, "parent": "Conscientiousness", "author": "Alex"},
      {"name": "Reliability", "size": 2000, "parent": "Conscientiousness", "author": "Alex"},
      {"name": "non-delinquency", "size": 2000, "parent": "Conscientiousness", "author": "Alex"},
      {"name": "Cautious", "size": 5000, "parent": "Conscientiousness", "author": "Alex"},
      {"name": "judicious", "size": 1000, "parent": "Conscientiousness", "author": "Alex"},
      {"name": "vigilant", "size": 2000, "parent": "Conscientiousness", "author": "Alex"},
      {"name": "alert", "size": 2000, "parent": "Conscientiousness", "author": "Alex"},
      // {"name": "orderly", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "clean", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "precise", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "systematic", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "Responsible", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "dutiful", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "obliged", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "accomplished", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "disciplined", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "will-power", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "grit", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "persistent", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "dedicated", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "cautious", "size": 2000, "parent": "Conscientiousness"},
      // {"name": "think carefully", "size": 2000, "parent": "Conscientiousness"},
     ]
    },
    {"name": "Extraversion", "size": 3500,
      "children": [
      {"name": "Dominance", "size": 2938, "parent": "Extraversion", "author": "Cici"},
      {"name": "Assertiveness", "size": 938, "parent": "Extraversion", "author": "Cici"},
      {"name": "Sociability", "size": 8938, "parent": "Extraversion", "author": "Cici"}, 
      {"name": "Excitement seeking", "size": 938, "parent": "Extraversion", "author": "Cici"},
      {"name": "adventurousness", "size": 938, "parent": "Extraversion", "author": "Cici"},
      {"name": "bold", "size": 938, "parent": "Extraversion", "author": "Cici"},
      {"name": "enthusiastic", "size": 938, "parent": "Extraversion", "author": "Cici"},
      {"name": "joyful", "size": 6938, "parent": "Extraversion", "author": "Cici"},
      {"name": "direct", "size": 938, "parent": "Extraversion", "author": "Alex"},
      {"name": "energetic", "size": 938, "parent": "Extraversion", "author": "Alex"},
      {"name": "active", "size": 5938, "parent": "Extraversion", "author": "Alex"},
      {"name": "optimistic", "size": 938, "parent": "Extraversion", "author": "Alex"},
      {"name": "friendly", "size": 938, "parent": "Extraversion", "author": "Alex"},
      // {"name": "cheerful", "size": 938, "parent": "Extraversion"},
      // {"name": "Gregarious", "size": 938, "parent": "Extraversion"},
      // {"name": "affable", "size": 1938, "parent": "Extraversion"},
      // {"name": "social", "size": 938, "parent": "Extraversion"},
      // {"name": "fun", "size": 938, "parent": "Extraversion"},
      // {"name": "outgoing", "size": 2938, "parent": "Extraversion"},
      // {"name": "warm", "size": 938, "parent": "Extraversion"},
      // {"name": "communicative", "size": 938, "parent": "Extraversion"},
      // {"name": "approachable", "size": 938, "parent": "Extraversion"},
      // {"name": "expansive", "size": 938, "parent": "Extraversion"},
      // {"name": "genial", "size": 938, "parent": "Extraversion"},
      // {"name": "life of the party", "size": 938, "parent": "Extraversion"},
      // {"name": "confident",  "size": 7938, "parent": "Extraversion"},
      // {"name": "emphatic", "size": 3938, "parent": "Extraversion"},
      // {"name": "strong willed", "size": 938, "parent": "Extraversion"}
     ]
    },
    {"name": "Openness", "size": 3500,
      "children": [
      {"name": "intellect", "size": 3012, "parent": "Openness", "author": "Cici"},
      {"name": "imagination", "size": 3012, "parent": "Openness", "author": "Cici"},
      {"name": "Curiosity", "size": 3012, "parent": "Openness", "author": "Cici"},
      {"name": "artistic", "size": 2012, "parent": "Openness", "author": "Cici"},
      {"name": "tolerant", "size": 3012, "parent": "Openness", "author": "Cici"},
      {"name": "introspective", "size": 3012, "parent": "Openness", "author": "Cici"},
      {"name": "inventive", "size": 3012, "parent": "Openness", "author": "Cici"},
      {"name": "creative", "size": 1012, "parent": "Openness", "author": "Cici"},
      {"name": "inventive", "size": 3012, "parent": "Openness", "author": "Alex"},
      {"name": "perceptive", "size": 3012, "parent": "Openness", "author": "Alex"},
      {"name": "experimental", "size": 3012, "parent": "Openness", "author": "Alex"},
      {"name": "absorption/flow", "size": 3012, "parent": "Openness", "author": "Alex"},
      {"name": "deep emotions", "size": 3012, "parent": "Openness", "author": "Alex"},
      {"name": "experiential", "size": 3012, "parent": "Openness", "author": "Alex"},
      {"name": "innovative", "size": 3012, "parent": "Openness", "author": "Alex"},
      // {"name": "original", "size": 3012, "parent": "Openness"},
      // {"name": "ingenious", "size": 3012, "parent": "Openness"},
      // {"name": "visionary", "size": 1012, "parent": "Openness"},
      // {"name": "whimsical", "size": 3012, "parent": "Openness"},
      // {"name": "reflective", "size": 3012, "parent": "Openness"},
      // {"name": "thoughtful", "size": 3012, "parent": "Openness"},
      // {"name": "contemplative", "size": 3012, "parent": "Openness"},
      // {"name": "pensive", "size": 3012, "parent": "Openness"},
      // {"name": "inquisitive", "size": 3012, "parent": "Openness"}, 
      // {"name": "analytical", "size": 7012, "parent": "Openness"},
      // {"name": "examining", "size": 3012, "parent": "Openness"}, 
      // {"name": "inquiring", "size": 3012, "parent": "Openness"}, 
      // {"name": "investigative", "size": 3012, "parent": "Openness"},
      // {"name": "musing", "size": 3012, "parent": "Openness"},
      // {"name": "meditative", "size": 8012, "parent": "Openness"},
      // {"name": "fantastical", "size": 3012, "parent": "Openness"},
     ]
    },
    {"name": "Stability", "size": 3500,
      "children": [
      {"name": "relaxed", "size": 1938, "parent": "Stability", "author": "Cici"},
      {"name": "calm", "size": 1938, "parent": "Stability", "author": "Cici"},
      {"name": "content", "size": 1938, "parent": "Stability", "author": "Cici"}, 
      {"name": "secure", "size": 1938, "parent": "Stability", "author": "Cici"},
      {"name": "emotionally strong", "size": 5938, "parent": "Stability", "author": "Cici"},
      {"name": "unreactive", "size": 1938, "parent": "Stability", "author": "Cici"},
      {"name": "well-being", "size": 1938, "parent": "Stability", "author": "Cici"},
      {"name": "brave", "size": 1938, "parent": "Stability", "author": "Cici"}, 
      {"name": "strong", "size": 1938, "parent": "Stability", "author": "Cici"},
      {"name": "hardy", "size": 1938, "parent": "Stability", "author": "Alex"},
      {"name": "assured", "size": 1938, "parent": "Stability", "author": "Alex"},
      {"name": "steady", "size": 6938, "parent": "Stability", "author": "Alex"},
      {"name": "tranquil", "size": 938, "parent": "Stability", "author": "Alex"},
      {"name": "bold", "size": 1938, "parent": "Stability", "author": "Alex"},
      {"name": "pleasant", "size": 1938, "parent": "Stability", "author": "Alex"},
      {"name": "easygoing", "size": 1938, "parent": "Stability", "author": "Alex"},
      // {"name": "stable", "size": 938, "parent": "Stability"},
      // {"name": "harmonious", "size": 1938, "parent": "Stability"},
      // {"name": "at peace", "size": 1938, "parent": "Stability"},
      // {"name": "serene", "size": 1938, "parent": "Stability"},
      // {"name": "unflappable", "size": 1938, "parent": "Stability"},
      // {"name": "collected", "size": 1938, "parent": "Stability"},
      // {"name": "poised", "size": 7938, "parent": "Stability"},
      // {"name": "comfortable", "size": 2938, "parent": "Stability"},
      // {"name": "content", "size": 1938, "parent": "Stability"},
      // {"name": "satisfied", "size": 5938, "parent": "Stability"},
      // {"name": "fulfilled", "size": 1938, "parent": "Stability"},
      // {"name": "at ease", "size": 1938, "parent": "Stability"},
      // {"name": "unanxious", "size": 1938, "parent": "Stability"},
      // {"name": "peaceful", "size": 1938, "parent": "Stability"}
     ]
    },
    {"name": "Agreeable", "size": 3500, 
      "children": [
      {"name": "Warmth", "size": 3534, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "affectionate", "size": 3534, "parent": "Agreeable", "author": "Cici"},
      {"name": "generosity", "size": 3534, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "cooperation", "size": 334, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "gentleness", "size": 3534, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "modesty", "size": 3534, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "altruistic", "size": 3534, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "tender-minded", "size": 3534, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "sympathetic", "size": 3534, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "benevolent", "size": 3534, "parent": "Agreeable", "author": "Cici"},
      {"name": "generous, kind", "size": 3534, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "compassionate", "size": 534, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "empathetic", "size": 3534, "parent": "Agreeable", "author": "Cici"},
      {"name": "modesty", "size": 3534, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "virtuous", "size": 5534, "parent": "Agreeable", "author": "Cici"}, 
      {"name": "justice", "size": 3534, "parent": "Agreeable", "author": "Cici"},
      {"name": "modest", "size": 3534, "parent": "Agreeable", "author": "Cici"},
      {"name": "humble giving", "size": 3534, "parent": "Agreeable", "author": "Cici"},
      {"name": "charitable", "size": 3534, "parent": "Agreeable", "author": "Alex"},
      {"name": "gentle", "size": 6534, "parent": "Agreeable", "author": "Alex"}, 
      {"name": "kind hearted", "size": 3534, "parent": "Agreeable", "author": "Alex"},
      {"name": "loving", "size": 3534, "parent": "Agreeable", "author": "Alex"},
      {"name": "sympathetic", "size": 3534, "parent": "Agreeable", "author": "Alex"}, 
      {"name": "benevolent", "size": 3534, "parent": "Agreeable", "author": "Alex"}, 
      {"name": "caring", "size": 3534, "parent": "Agreeable", "author": "Alex"}, 
      {"name": "philanthropic", "size": 3534, "parent": "Agreeable", "author": "Alex"}, 
      {"name": "trusting", "size": 4534, "parent": "Agreeable", "author": "Alex"}, 
      {"name": "forgiving", "size": 3534, "parent": "Agreeable", "author": "Alex"},
      // {"name": "unassuming", "size": 3534, "parent": "Agreeable"}, 
      // {"name": "sincere", "size": 3534, "parent": "Agreeable"}, 
      // {"name": "candid", "size": 3534, "parent": "Agreeable"}, 
      // {"name": "genuine", "size": 3534, "parent": "Agreeable"}, 
      // {"name": "compromising", "size": 3534, "parent": "Agreeable"}, 
      // {"name": "tender-hearted", "size": 3534, "parent": "Agreeable"}, 
      // {"name": "cooperative", "size": 9534, "parent": "Agreeable"}
   ]
  }
 ]
}

root = json;
update();

function update() {
  var nodes = flatten(root),
      links = d3.layout.tree().links(nodes);

  // Restart the force layout.
  force
      .nodes(nodes)
      .links(links)
      .linkDistance(50)
      .start();

  // Update the links…
  link = link.data(links, function(d) { return d.target.id; });

  // Exit any old links.
  link.exit().remove();

  // Enter any new links.
  link.enter().insert("line", ".node")
      .attr("class", "link")
      .attr("class",function(d) { if (d.author==='Alex') {return "node1"} else if (d.author==='Cici') {return "node2"}})
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; })
      .attr("id", "surveyLine")
      .style("stroke", "#bcc4d2")
      .style("stroke-width", 0.4);

  // Update the nodes…
  node = node.data(nodes, function(d) { return d.id; }).style("fill", color);
  node2 = node2.data(nodes, function(d) { return d.id; }).style("fill", color);

  // Exit any old nodes.
  node.exit().remove();
  node2.exit().remove();

  // Enter any new nodes.
  node.enter().append("circle")
      // .attr("class", "node1")
      // .attr("class", "node2")
      .attr("class",function(d) { if (d.author==='Alex') {return "node1"} else if (d.author==='Cici') {return "node2"}})
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("id", "surveyCircle")
      .attr("r", function(d) { return Math.sqrt(d.size) / 7 || 4.5; })
      .attr("data-legend",function(d) { if (d.author === "Alex") {return d.name}})
      // .attr("data-legend",function(d) { if (d.author === "Cici") {return d.name}})
      // .attr("data-legend",function(d) { if (!d.children) {return d.name}})
      // .attr("data-legend",function(d) {return d.name})
      .style("fill", color)
      .style("opacity", 0.9)
      .on("mouseover", function(d) {
        var bubble = d3.select(this);
        bubble.attr("stroke", "#000")
          .attr("stroke-width", 1);
        tooltip.text(d.name);
        // tooltip.text(d.name + ((d.size) ? (": " + d.size) : ""));
        tooltip.style("visibility", "visible");
      })
      .on("mousemove", function() {
        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on("mouseout", function() {
        var bubble = d3.select(this);
        tooltip.style("visibility", "hidden");
        bubble.attr("stroke", "none");
      })
      .on("click", click)
      .call(force.drag);

  node2.enter().append("circle")
      // .attr("class", "node1")
      // .attr("class", "node2")
      .attr("class",function(d) { if (d.author==='Alex') {return "node1"} else if (d.author==='Cici') {return "node2"}})
      .attr("data-legend",function(d) { if (d.author === "Cici") {return d.name}})
      .style("fill", color)

  var legend = svg.selectAll(".legend")
    .data(node)
    .enter()
    .append("g")
    .attr("class","legend")
    .attr("transform","translate(50,40)")
    // .attr("transform", function(d,i) {
    //   console.log(i, d)
    //   xOff = (i % 2) * 50 + 50
    //   yOff = Math.floor(i  / 2) * 10 + 40
    //   return "translate(" + xOff + "," + yOff + ")" 
    //   })
    .attr("id", "survey1Legend")
    .style("font-size","12px")
    .style("font-family","Arial, Helvetica, sans-serif")
    .call(d3.legend)

  var legend2 = svg2.selectAll(".legend")
    .data(node2)
    .enter()
    .append("g")
    .attr("class","legend")
    .attr("transform","translate(180,40)")
    .attr("z-index", 100)
    .attr("id", "survey1Legend")
    .style("font-size","12px")
    .style("font-family","Arial, Helvetica, sans-serif")
    .call(d3.legend)

  var text = svg.append("text")
    .attr("x", 40)
    .attr("y", 20)
    .attr("class", "legend")
    .style("font-family","Arial, Helvetica, sans-serif")
    .style("fill", "black")
    .on("click", function(){
      // Determine if current line is visible
      var active   = surveyCircle.active ? false : true,
      newOpacity = active ? 0 : 1;
      // Hide or show the elements
      // console.log(d3.selectAll(".node1"));
      // d3.select("#survey1Legend").style("opacity", newOpacity);
      // d3.select("#surveyLine").style("opacity", newOpacity);
      d3.selectAll(".node1").style("opacity", newOpacity);
      // Update whether or not the elements are active
      surveyCircle.active = active;
    })
    .text("From Alex <3")

  var text2 = svg.append("text")
    .attr("x", 180)
    .attr("y", 20)
    .attr("class", "legend")
    .style("font-family","Arial, Helvetica, sans-serif")
    .style("fill", "black")
    .on("click", function(){
      // Determine if current line is visible
      var active   = surveyCircle.active ? false : true,
      newOpacity = active ? 0 : 1;
      // Hide or show the elements
      // d3.select("#surveyLegend").style("opacity", newOpacity);
      // d3.select("#surveyLine").style("opacity", newOpacity);
      d3.selectAll(".node2").style("opacity", newOpacity);
      // Update whether or not the elements are active
      surveyCircle.active = active;
    })
    .text("From Cici :P")
}

// Color leaf nodes orange, and packages white or blue.
function color(d) {
  // return d._children ? "#3182bd" : d.children ? "#FE563B" : "#6275A1";
  if(d.parent !== undefined){
    // console.log(d.parent);
    switch (d.parent) {
    case "Extraversion": //red
      return colors.red;
      break;
    case "Agreeable": //darkYellow
      return colors.darkYellow;
      break;
    case "Conscientiousness": //green
      return colors.green;
      break;
    case "Stability": //blue
      return colors.blue;
      break;
    case "Openness": //purple
      return colors.purple;
      break;
    case "Passion": //red
        return colors.red;
        break;
      case "Purpose": //yellow
        return colors.yellow;
        break;
    default:
      return colors.blue; //blue
    }
  }else{
    switch (d.name) {
      case "Personality": //blue
        return colors.darkBlue;
        break;
      case "Extraversion": //red
        return colors.red;
        break;
      case "Agreeable": //orange
        return colors.orange;
        break;
      case "Conscientiousness": //green
        return colors.darkGreen;
        break;
      case "Stability": //blue
        return colors.blue;
        break;
      case "Openness": //purple
        return colors.purple;
        break;

      case "Passion": //red
        return colors.red;
        break;
      case "Purpose": //orange
        return colors.orange;
        break;
      case "Her": //pink
        return colors.pink;
        break;
      default:
        return colors.blue; //blue
    }
  }
}

// Toggle children on click.
function click(d) {
  if (!d3.event.defaultPrevented) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update();
  }
}

// Returns a list of all nodes under the root.
function flatten(root) {
  var nodes = [], i = 0;

  function recurse(node) {
    if (node.children) node.children.forEach(recurse);
    if (!node.id) node.id = ++i;
    nodes.push(node);
  }

  recurse(root);
  return nodes;
}