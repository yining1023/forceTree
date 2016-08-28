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
 "name": "Her", "size": 6000,
 "children": [
 {
   "name": "Personality", "size": 6000,
   "children": [
    {"name": "Conscientiousness", "size": 3938, 
      "children": [
      {"name": "Achievement", "size": 3938, },
      {"name": "Industriousness", "size": 3012},
      {"name": "Order", "size": 2014},
      {"name": "Self-control", "size": 1743},
      {"name": "Decisiveness", "size": 4743},
      {"name": "Responsibility", "size": 2812},
      {"name": "Reliability", "size": 1014},
      {"name": "non-delinquency", "size": 843}
     ]
    },
    {"name": "Extroversion", "size": 3812,
      "children": [
      {"name": "Dominance", "size": 938, },
      {"name": "Assertiveness", "size": 5012},
      {"name": "Sociability", "size": 1014},
      {"name": "Excitement seeking", "size": 4643},
      {"name": "adventurousness", "size": 2743}
     ]
    },
    {"name": "Openness", "size": 6714,
      "children": [
      {"name": "intellect", "size": 4038, },
      {"name": "imagination", "size": 3012},
      {"name": "Curiosity", "size": 1214},
      {"name": "artistic", "size": 4003},
      {"name": "tolerant", "size": 6043}
     ]
    },
    {"name": "Emotion Stability", "size": 743,
      "children": [
      {"name": "relaxed", "size": 938, },
      {"name": "calm", "size": 3912},
      {"name": "content", "size": 1214},
      {"name": "secure", "size": 1003},
      {"name": "emotionally strong", "size": 8043},
      {"name": "unreactive", "size": 2043},
      {"name": "well-being", "size": 3043}
     ]
    },
    {"name": "Agreeableness", "size": 4743, 
      "children": [
      {"name": "Warmth", "size": 1938, },
      {"name": "affectionate", "size": 1912},
      {"name": "generosity", "size": 614},
      {"name": "cooperation", "size": 2003},
      {"name": "gentleness", "size": 1043},
      {"name": "modesty", "size": 2043}
     ]
    }
   ]
  },
  {
   "name": "Passion", "size": 6000,
   "children": [
    {"name": "urban vs nature", "size": 3534}, 
    {"name": "indoor vs. outdoor", "size": 5731},
    {"name": "social vs. non-social", "size": 2840},
    {"name": "active vs inactive", "size": 4914}
   ]
  },
  {
   "name": "Purpose", "size": 6000,
   "children": [
    {"name": "AspectRatioBanker", "size": 7074}
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
      .attr("y2", function(d) { return d.target.y; });

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
      .on("mouseover", function(d) {
        var bubble = d3.select(this);
        bubble.attr("stroke", "#000")
          .attr("stroke-width", 2.5);
        tooltip.text(d.name + ((d.size) ? (": " + d.size) : ""));
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
  return d._children ? "#3182bd" : d.children ? "#FE563B" : "#6275A1";
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