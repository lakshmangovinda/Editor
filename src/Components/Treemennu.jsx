import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
const TreeNode = ({ node, onAddChild, onRemoveChild }) => {
    let navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);

    const handleAddChild = () => {
        onAddChild(node);
    };

    const handleRemoveChild = () => {
        onRemoveChild(node);
    };
    const handleroute = (label) => {

        navigate(`/edit/${label}`)
    }

    return (
        <div style={{ width: "250px", marginTop: "30px" }}  >
            <div className="d-flex justify-content-between  align-items-center " onClick={() => handleroute(node.label)}>
                <div>
                    <span onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? <FaIcons.FaSortDown style={{ color: "grey" }} /> : <FaIcons.FaCaretRight style={{ color: "grey" }} />}
                        {node.label}
                    </span>

                </div>
                <div className="d-flex gap-4  align-items-center" style={{ width: "100px" }} >
                    <FaIcons.FaPlus onClick={handleAddChild} style={{ color: "grey" }} />
                    <FaIcons.FaMinus onClick={handleRemoveChild} style={{ color: "grey" }} />
                    <FaIcons.FaCopy style={{ color: "grey" }} />
                </div>

            </div>
            {isExpanded && (
                <div style={{ marginLeft: "10px" }}>
                    {node.children.map((childNode) => (
                        <TreeNode
                            key={childNode.id}
                            node={childNode}
                            onAddChild={onAddChild}
                            onRemoveChild={onRemoveChild}
                            onClick={() => console.log("logged")}
                        />
                        
                    ))}
                </div>
            )}
        </div>
    );
};

const TreeMenu = () => {
    const [tree, setTree] = useState({
        id: 1,
        label: "Root",
        children: [],
    });

    const handleAddChild = (parentNode) => {
        const childName = prompt("Enter the name of the child node:");
        if (!childName) return; // If the user cancels or leaves the input empty, do nothing
        const newChild = {
            id: Date.now(),
            label: childName,
            children: [],
        };

        const updatedParent = {
            ...parentNode,
            children: [...parentNode.children, newChild],
        };

        const updatedTree = updateNode(tree, updatedParent);
        setTree(updatedTree);
    };

    const handleRemoveChild = (parentNode) => {

        const updatedChildren = parentNode.children.filter(

            (child) => console.log(child.id, parentNode.id)
        );

        const updatedParent = {
            ...parentNode,
            children: updatedChildren,
        };

        const updatedTree = updateNode(tree, updatedParent);
        setTree(updatedTree);
    };

    const updateNode = (parentNode, updatedNode) => {
        if (parentNode.id === updatedNode.id) {
            return updatedNode;
        }

        if (parentNode.children) {
            return {
                ...parentNode,
                children: parentNode.children.map((childNode) =>
                    updateNode(childNode, updatedNode)
                ),
            };
        }

        return parentNode;
    };

    return (
        <div>

            <TreeNode
                node={tree}
                onAddChild={handleAddChild}
                onRemoveChild={handleRemoveChild}

            />
        </div>
    );
};

export default TreeMenu;
