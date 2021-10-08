export function findElementsInContentJson(elementNames, json) {
    if (elementNames.includes(json.name)) {
        return [json]
    } else if (json.elements) {
        return json.elements.reduce((acc, elem) => {
            return [...acc, ...findElementsInContentJson(elementNames, elem)]
        }, [])
    } else {
        return []
    }
}