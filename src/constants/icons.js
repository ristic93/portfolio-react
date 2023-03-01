import React from "react";
import allIcons from "simple-icons";
import { v4 as uuidv4 } from 'uuid';
import { IconCloud } from "react-icon-cloud";

const Sphere = () => {

    const tagCanvasOptions = {
        imageScale: 2,
        initial: [0.1, -0.1],
        reverse: true,
        tooltip: "native", // null | 'div'
        tooltipDelay: 0,
        wheelZoom: false,
        outlineColour: '#0000',
        noMouse: true,
    };

    const iconSlugs = [
        'react',
        'javascript',
        'html5',
        'git',
        'github',
        'visualstudiocode',
        'bootstrap',
        'css3',
        'sass',
        'tailwindcss',
        'typescript',
        'netlify',
        'slack',
        "vite",
        "materialui",
        "canva",
        "npm",
        "nextdotjs",
        "nodedotjs",
        "figma",
        "firebase"
    ];

    const iconTags = iconSlugs.map((slug) => ({
        id: slug,
        simpleIcon: allIcons.Get(slug)
    }));

    return (
        <div style={{ textAlign: "center" }}>
            <IconCloud
                key={uuidv4()}
                id={"icon"}
                minContrastRatio={1}
                iconSize={30}
                backgroundHexColor={"#fff"}
                fallbackHexColor={"#000"}
                tags={iconTags}
                tagCanvasOptions={tagCanvasOptions} />
        </div>)
}
export default Sphere;