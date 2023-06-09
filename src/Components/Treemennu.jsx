import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
const TreeNode = ({ node, onAddChild, onRemoveChild }) => {
    let navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const [name, Setname] = useState('default')
    const handlName = (event) => {

        Setname(event.target.value)
    }

    const handleAddChild = () => {
        onAddChild(node, name);
    };

    const handleRemoveChild = () => {
        onRemoveChild(node);
    };
    const handleroute = (label) => {
        navigate({
            pathname: '',
            search: `?label=${node.label}&id=${label.id}`,
        });
    }

    return (
        <div style={{ width: "250px", marginTop: "20px" }}  >

            <div className="d-flex  gap-4  align-items-center " >
                <span onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? <FaIcons.FaSortDown style={{ color: "grey" }} /> : <FaIcons.FaCaretRight style={{ color: "grey" }} />}</span>
                <span onClick={() => handleroute(node)}>
                    {node.label}
                </span>
                <div>

                </div>
                <div className="d-flex gap-4 justify-content-between align-items-end" style={{ width: "80px" }} >
                    <FaIcons.FaPlus style={{ color: "grey" }} className="dropdown" data-bs-toggle="dropdown" aria-expanded="false" />
                    <ul className="dropdown-menu">
                        <input type="text" onChange={handlName} className="form-control"  ></input>
                        <button className="btn btn-transparent" onClick={handleAddChild}>ok</button>


                    </ul>
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
        label: "Container",
        children: [],
    });

    const handleAddChild = (parentNode, name) => {
        const childName = name
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
