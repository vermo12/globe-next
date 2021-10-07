import { useRouter } from "next/dist/client/router";
import { COBALT_BASE, COBALT_PREVIEW_BASE } from "../../cobalt.settings";

export default function ResourceResolver(resourceUrl){
    const router = useRouter();
    return (router.pathname.startsWith('/preview')?COBALT_PREVIEW_BASE:COBALT_BASE) + resourceUrl
}