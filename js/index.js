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
var width = 960,
    height = 600,
    root;

var force = d3.layout.force()
    .size([width, height])
    .on("tick", tick);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var link = svg.selectAll(".link"),
    node = svg.selectAll(".node");

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

var json = {
 "name": "Her", "size": 30000,
 "children": [
 {
   "name": "Personality", "size": 15000,
   "children": [
    {"name": "Conscientiousness", "size": 10000, 
      "children": [
      {"name": "Achievement", "size": 5000, "parent": "Conscientiousness"},
      {"name": "Industriousness", "size": 2000, "parent": "Conscientiousness"},
      {"name": "Order", "size": 5000, "parent": "Conscientiousness"},
      {"name": "orderly", "size": 2000, "parent": "Conscientiousness"},
      {"name": "tidy", "size": 2000, "parent": "Conscientiousness"},
      {"name": "neat", "size": 2000, "parent": "Conscientiousness"},
      {"name": "well-organized", "size": 2000, "parent": "Conscientiousness"},
      {"name": "Self-control", "size": 2000, "parent": "Conscientiousness"},
      {"name": "Decisiveness", "size": 2000, "parent": "Conscientiousness"},
      {"name": "Responsibility", "size": 2000, "parent": "Conscientiousness"},
      {"name": "Reliability", "size": 2000, "parent": "Conscientiousness"},
      {"name": "non-delinquency", "size": 2000, "parent": "Conscientiousness"},
      {"name": "Cautious", "size": 5000, "parent": "Conscientiousness"},
      {"name": "judicious", "size": 1000, "parent": "Conscientiousness"},
      {"name": "vigilant", "size": 2000, "parent": "Conscientiousness"},
      {"name": "alert", "size": 2000, "parent": "Conscientiousness"},
      {"name": "orderly", "size": 2000, "parent": "Conscientiousness"},
      {"name": "clean", "size": 2000, "parent": "Conscientiousness"},
      {"name": "precise", "size": 2000, "parent": "Conscientiousness"},
      {"name": "systematic", "size": 2000, "parent": "Conscientiousness"},
      {"name": "Responsible", "size": 2000, "parent": "Conscientiousness"},
      {"name": "dutiful", "size": 2000, "parent": "Conscientiousness"},
      {"name": "obliged", "size": 2000, "parent": "Conscientiousness"},
      {"name": "accomplished", "size": 2000, "parent": "Conscientiousness"},
      {"name": "disciplined", "size": 2000, "parent": "Conscientiousness"},
      {"name": "will-power", "size": 2000, "parent": "Conscientiousness"},
      {"name": "grit", "size": 2000, "parent": "Conscientiousness"},
      {"name": "persistent", "size": 2000, "parent": "Conscientiousness"},
      {"name": "dedicated", "size": 2000, "parent": "Conscientiousness"},
      {"name": "cautious", "size": 2000, "parent": "Conscientiousness"},
      {"name": "think carefully", "size": 2000, "parent": "Conscientiousness"},
      {"name": "strive hard", "size": 2000, "parent": "Conscientiousness"},
      {"name": "thinks carefully", "size": 6000, "parent": "Conscientiousness"},
      {"name": "self-efficacy", "size": 2000, "parent": "Conscientiousness"},
      {"name": "deliberate", "size": 2000, "parent": "Conscientiousness"},
      {"name": "meticulous", "size": 2000, "parent": "Conscientiousness"},
      {"name": "prudent", "size": 4000, "parent": "Conscientiousness"},
      {"name": "precise", "size": 2000, "parent": "Conscientiousness"},
      {"name": "scrupulous", "size": 2000, "parent": "Conscientiousness"},
      {"name": "rigorous", "size": 2000, "parent": "Conscientiousness"},
      {"name": "mindful", "size": 2000, "parent": "Conscientiousness"},
      {"name": "assiduous", "size": 2000, "parent": "Conscientiousness"},
      {"name": "exacting", "size": 2000, "parent": "Conscientiousness"},
      {"name": "fastidious", "size": 5000, "parent": "Conscientiousness"},
      {"name": "punctual", "size": 2000, "parent": "Conscientiousness"},
      {"name": "systematic", "size": 2000, "parent": "Conscientiousness"},
      {"name": "thorough", "size": 2000, "parent": "Conscientiousness"},
      {"name": "clean", "size": 2000, "parent": "Conscientiousness"},
      {"name": "careful", "size": 2000, "parent": "Conscientiousness"},
      {"name": "neat", "size": 2000, "parent": "Conscientiousness"},
      {"name": "well-kept", "size": 2000, "parent": "Conscientiousness"}
     ]
    },
    {"name": "Extraversion", "size": 10000,
      "children": [
      {"name": "Dominance", "size": 2938, "parent": "Extraversion"},
      {"name": "Assertiveness", "size": 938, "parent": "Extraversion"},
      {"name": "Sociability", "size": 8938, "parent": "Extraversion"}, 
      {"name": "Excitement seeking", "size": 938, "parent": "Extraversion"},
      {"name": "adventurousness", "size": 938, "parent": "Extraversion"},
      {"name": "bold", "size": 938, "parent": "Extraversion"},
      {"name": "enthusiastic", "size": 938, "parent": "Extraversion"},
      {"name": "joyful", "size": 6938, "parent": "Extraversion"},
      {"name": "direct", "size": 938, "parent": "Extraversion"},
      {"name": "energetic", "size": 938, "parent": "Extraversion"},
      {"name": "active", "size": 5938, "parent": "Extraversion"},
      {"name": "optimistic", "size": 938, "parent": "Extraversion"},
      {"name": "friendly", "size": 938, "parent": "Extraversion"},
      {"name": "cheerful", "size": 938, "parent": "Extraversion"},
      {"name": "Gregarious", "size": 938, "parent": "Extraversion"},
      {"name": "affable", "size": 1938, "parent": "Extraversion"},
      {"name": "social", "size": 938, "parent": "Extraversion"},
      {"name": "fun", "size": 938, "parent": "Extraversion"},
      {"name": "outgoing", "size": 2938, "parent": "Extraversion"},
      {"name": "warm", "size": 938, "parent": "Extraversion"},
      {"name": "communicative", "size": 938, "parent": "Extraversion"},
      {"name": "approachable", "size": 938, "parent": "Extraversion"},
      {"name": "expansive", "size": 938, "parent": "Extraversion"},
      {"name": "genial", "size": 938, "parent": "Extraversion"},
      {"name": "life of the party", "size": 938, "parent": "Extraversion"},
      {"name": "confident",  "size": 7938, "parent": "Extraversion"},
      {"name": "emphatic", "size": 3938, "parent": "Extraversion"},
      {"name": "strong willed", "size": 938, "parent": "Extraversion"}
     ]
    },
    {"name": "Openness", "size": 10000,
      "children": [
      {"name": "intellect", "size": 3012, "parent": "Openness"},
      {"name": "imagination", "size": 3012, "parent": "Openness"},
      {"name": "Curiosity", "size": 3012, "parent": "Openness"},
      {"name": "artistic", "size": 2012, "parent": "Openness"},
      {"name": "tolerant", "size": 3012, "parent": "Openness"},
      {"name": "introspective", "size": 3012, "parent": "Openness"},
      {"name": "inventive", "size": 3012, "parent": "Openness"},
      {"name": "creative", "size": 1012, "parent": "Openness"},
      {"name": "inventive", "size": 3012, "parent": "Openness"},
      {"name": "perceptive", "size": 3012, "parent": "Openness"},
      {"name": "experimental", "size": 3012, "parent": "Openness"},
      {"name": "absorption/flow", "size": 3012, "parent": "Openness"},
      {"name": "deep emotions", "size": 3012, "parent": "Openness"},
      {"name": "experiential", "size": 3012, "parent": "Openness"},
      {"name": "innovative", "size": 3012, "parent": "Openness"},
      {"name": "original", "size": 3012, "parent": "Openness"},
      {"name": "ingenious", "size": 3012, "parent": "Openness"},
      {"name": "visionary", "size": 1012, "parent": "Openness"},
      {"name": "whimsical", "size": 3012, "parent": "Openness"},
      {"name": "reflective", "size": 3012, "parent": "Openness"},
      {"name": "thoughtful", "size": 3012, "parent": "Openness"},
      {"name": "contemplative", "size": 3012, "parent": "Openness"},
      {"name": "pensive", "size": 3012, "parent": "Openness"},
      {"name": "inquisitive", "size": 3012, "parent": "Openness"}, 
      {"name": "analytical", "size": 7012, "parent": "Openness"},
      {"name": "examining", "size": 3012, "parent": "Openness"}, 
      {"name": "inquiring", "size": 3012, "parent": "Openness"}, 
      {"name": "investigative", "size": 3012, "parent": "Openness"},
      {"name": "musing", "size": 3012, "parent": "Openness"},
      {"name": "meditative", "size": 8012, "parent": "Openness"},
      {"name": "fantastical", "size": 3012, "parent": "Openness"},
     ]
    },
    {"name": "Stability", "size": 10000,
      "children": [
      {"name": "relaxed", "size": 1938, "parent": "Stability"},
      {"name": "calm", "size": 1938, "parent": "Stability"},
      {"name": "content", "size": 1938, "parent": "Stability"}, 
      {"name": "secure", "size": 1938, "parent": "Stability"},
      {"name": "emotionally strong", "size": 5938, "parent": "Stability"},
      {"name": "unreactive", "size": 1938, "parent": "Stability"},
      {"name": "well-being", "size": 1938, "parent": "Stability"},
      {"name": "brave", "size": 1938, "parent": "Stability"}, 
      {"name": "strong", "size": 1938, "parent": "Stability"},
      {"name": "hardy", "size": 1938, "parent": "Stability"},
      {"name": "assured", "size": 1938, "parent": "Stability"},
      {"name": "steady", "size": 6938, "parent": "Stability"},
      {"name": "tranquil", "size": 938, "parent": "Stability"},
      {"name": "bold", "size": 1938, "parent": "Stability"},
      {"name": "pleasant", "size": 1938, "parent": "Stability"},
      {"name": "easygoing", "size": 1938, "parent": "Stability"},
      {"name": "stable", "size": 938, "parent": "Stability"},
      {"name": "harmonious", "size": 1938, "parent": "Stability"},
      {"name": "at peace", "size": 1938, "parent": "Stability"},
      {"name": "serene", "size": 1938, "parent": "Stability"},
      {"name": "unflappable", "size": 1938, "parent": "Stability"},
      {"name": "collected", "size": 1938, "parent": "Stability"},
      {"name": "poised", "size": 7938, "parent": "Stability"},
      {"name": "comfortable", "size": 2938, "parent": "Stability"},
      {"name": "content", "size": 1938, "parent": "Stability"},
      {"name": "satisfied", "size": 5938, "parent": "Stability"},
      {"name": "fulfilled", "size": 1938, "parent": "Stability"},
      {"name": "at ease", "size": 1938, "parent": "Stability"},
      {"name": "unanxious", "size": 1938, "parent": "Stability"},
      {"name": "peaceful", "size": 1938, "parent": "Stability"}
     ]
    },
    {"name": "Agreeable", "size": 10000, 
      "children": [
      {"name": "Warmth", "size": 3534, "parent": "Agreeable"}, 
      {"name": "affectionate", "size": 3534, "parent": "Agreeable"}, 
      {"name": "generosity", "size": 3534, "parent": "Agreeable"}, 
      {"name": "cooperation", "size": 334, "parent": "Agreeable"}, 
      {"name": "gentleness", "size": 3534, "parent": "Agreeable"}, 
      {"name": "modesty", "size": 3534, "parent": "Agreeable"}, 
      {"name": "altruistic", "size": 3534, "parent": "Agreeable"}, 
      {"name": "tender-minded", "size": 3534, "parent": "Agreeable"}, 
      {"name": "sympathetic", "size": 3534, "parent": "Agreeable"}, 
      {"name": "benevolent", "size": 3534, "parent": "Agreeable"}, 
      {"name": "generous, kind", "size": 3534, "parent": "Agreeable"}, 
      {"name": "compassionate", "size": 534, "parent": "Agreeable"}, 
      {"name": "empathetic", "size": 3534, "parent": "Agreeable"},
      {"name": "modesty", "size": 3534, "parent": "Agreeable"}, 
      {"name": "virtuous", "size": 5534, "parent": "Agreeable"}, 
      {"name": "justice", "size": 3534, "parent": "Agreeable"},
      {"name": "modest", "size": 3534, "parent": "Agreeable"}, 
      {"name": "humble giving", "size": 3534, "parent": "Agreeable"}, 
      {"name": "charitable", "size": 3534, "parent": "Agreeable"}, 
      {"name": "gentle", "size": 6534, "parent": "Agreeable"}, 
      {"name": "kind hearted", "size": 3534, "parent": "Agreeable"}, 
      {"name": "loving", "size": 3534, "parent": "Agreeable"}, 
      {"name": "sympathetic", "size": 3534, "parent": "Agreeable"}, 
      {"name": "benevolent", "size": 3534, "parent": "Agreeable"}, 
      {"name": "caring", "size": 3534, "parent": "Agreeable"}, 
      {"name": "philanthropic", "size": 3534, "parent": "Agreeable"}, 
      {"name": "trusting", "size": 4534, "parent": "Agreeable"}, 
      {"name": "forgiving", "size": 3534, "parent": "Agreeable"}, 
      {"name": "unassuming", "size": 3534, "parent": "Agreeable"}, 
      {"name": "sincere", "size": 3534, "parent": "Agreeable"}, 
      {"name": "candid", "size": 3534, "parent": "Agreeable"}, 
      {"name": "genuine", "size": 3534, "parent": "Agreeable"}, 
      {"name": "compromising", "size": 3534, "parent": "Agreeable"}, 
      {"name": "tender-hearted", "size": 3534, "parent": "Agreeable"}, 
      {"name": "cooperative", "size": 9534, "parent": "Agreeable"}
     ]
    }
   ]
  },
  {
   "name": "Passion", "size": 15000,
   "children": [
    {"name": "urban vs nature", "size": 3534, "parent": "Passion"}, 
    {"name": "indoor vs. outdoor", "size": 5731, "parent": "Passion"},
    {"name": "social vs. non-social", "size": 2840, "parent": "Passion"},
    {"name": "active vs inactive", "size": 4914, "parent": "Passion"}
   ]
  },
  {
   "name": "Purpose", "size": 15000,
   "children": [
    {"name": "love", "size": 7074, "parent": "Purpose"}
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
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; })
      .style("stroke", "#bcc4d2")
      .style("stroke-width", 0.25);

  // Update the nodes…
  node = node.data(nodes, function(d) { return d.id; }).style("fill", color);

  // Exit any old nodes.
  node.exit().remove();

  // Enter any new nodes.
  node.enter().append("circle")
      .attr("class", "node")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("r", function(d) { return Math.sqrt(d.size) / 7 || 4.5; })
      .style("fill", color)
      .style("opacity", 0.8)
      .on("mouseover", function(d) {
        var bubble = d3.select(this);
        bubble.attr("stroke", "#fff")
          .attr("stroke-width", 2.5);
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
}

function tick() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

// Color leaf nodes orange, and packages white or blue.
function color(d) {
  // return d._children ? "#3182bd" : d.children ? "#FE563B" : "#6275A1";
  if(d.parent !== undefined){
    console.log(d.parent);
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