import cytoscape from 'cytoscape';

export default (seeds) => {

var graphElements = [];
    for(let i=0; i<seeds.length; i++){
        let elementTitle = seeds[i].scene_title;
        let elementChoiceA = seeds[i].choice_a;
        let elementChoiceB = seeds[i].choice_b;
        let elementNextNum = seeds[i].next_scene;
        let correctChoicePropName = seeds[i].correct_choice;
        let elementCorrectChoice = seeds[i][correctChoicePropName];
        let elementCorrectResult = seeds.filter(obj => { return obj.id === elementNextNum });
        let elementCorrectId = seeds[i];
        let choice_a_id = "choice_a_" + i;
        let choice_b_id = "choice_b_" + i;

        // console.log("elementTitle: " + elementTitle);
        // console.log("elementChoiceA: " + elementChoiceA);
        // console.log("elementChoiceB: " + elementChoiceB);
        // console.log("elementNextNum: " + elementNextNum);
        // console.log("elementCorrectChoice: " + elementCorrectChoice);
        // console.log("elementCorrectResult: " + elementCorrectResult[0].scene_title);
        // console.log("elementCorrectId: " + elementCorrectId);
        
        // Build node and decision edge connectors in graphElements object array
        graphElements.push(
            { data: 
                { 
                    id: elementTitle,
                    class: "chapter"
                }
            });
        
        if( i < seeds.length-1 ) {
            
            graphElements.push(
                { data: 
                    {   
                        id: elementChoiceA,
                        class: "choice"
                    }
                });

            graphElements.push(
                { data: 
                    {
                        id: elementChoiceB,
                        class: "choice"
                    }
                });

            graphElements.push(
                { data: 
                    {
                        id: choice_a_id,
                        source: elementTitle,
                        target: elementChoiceA
                    }
                });

            graphElements.push(
                { data: 
                    {
                        id: choice_b_id,
                        source: elementTitle,
                        target: elementChoiceB
                    }
                });

            graphElements.push(
                { data: 
                    {
                        id: i,
                        source: elementCorrectChoice,
                        target: elementCorrectResult[0].scene_title
                    }
                });
        }
    }

    // REF: https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-of-property
    // var result = seeds.filter(obj => { return obj.id === 6 });
    
    var cy = cytoscape({

        container: document.getElementById('cy'), // container to render in

        elements: graphElements,

        style: [ // the stylesheet for the graph
        {
            selector: 'node',
            style: {
            'background-color': '#666',
            'label': 'data(id)'
            }
        },
        {
            selector: 'edge',
            style: {
            'width': 3,
            'line-color': '#cc6',
            'target-arrow-color': '#fff',
            'target-arrow-shape': 'triangle',
            'mid-target-arrow-shape': 'vee',
            'arrow-scale': 2
            }
        },
        {
            selector: '.chapter',
            style: {
            'font-size': '3em',
            'color': '#f00'
            }
        },
        {
            selector: 'node',
            style: {
            'shape': 'ellipse'
            }
        }
        ],

        layout: {
        name: 'breadthfirst',
        directed: true,
        animate: true,
        avoidOverlap: true
        }

    });
}