/* eslint-disable prettier/prettier */
import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "wjzrL592J9Gyso7a7pkk7M",  // ID of a project you are using
            token: "5uUnwCuNGoubG8A29zG4K4PaUhjQFiRkGpmixpjjgjZxMZzMtPI62HFY8l4oV4SLRbhj6ltxkRCqj27DXaDg"  // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: true,
})