function globalfn() {};

globalfn.mergeSourceInToTarget = function (targetObject, sourceObject) {
    for (var key in sourceObject) {
        targetObject[key] = sourceObject[key];
    }
};