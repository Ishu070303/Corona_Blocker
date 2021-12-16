replaceTEXT(document.body);

// FOR CORONAVIRUS WORD //
function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    }

    else if(element.nodeType === Text.TEXT_NODE){
        element.textContent = element.textContent.replace(/coronavirus/gi, '---');
    }
}


// FOR CORONAVIRUS PARAGRAPH
function replacePara(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replacePara);
    }

    else if(element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/coronavirus/gi)){
            element.parentElement.style.color = 'black';
            element.parentElement.style.backgroundColor = 'black';
        }
    }
}

// BLACK CODE ONLY CORONAVIRUS

function replaceTEXT(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceTEXT);
    }

    else if(element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/coronavirus/gi)){
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
            '<span style="background-color:black; color: black;">$1</span>'    
            )

            element.replaceWith(newElement);
        }
    }
}

// COMPLETELY REMOVE THE CORONAVIRUS
function RemoveText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(RemoveText);
    }

    else if(element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/coronavirus/gi)){
            element.parentElement.remove();
        }
    }
}

// HIGLIGHTING  THE WORD
function RemoveText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(RemoveText);
    }

    else if(element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/coronavirus/gi)){
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
            '<span class="rainbow">$1</span>'    
            )

            element.replaceWith(newElement);   
        }
    }
}


