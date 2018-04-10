const cursorHelper = ({
    loader,
    extractProps,
    assignToken,
}) => {
    const listAll = (options, objects, nextToken) => {
        objects = objects || [];

        nextToken = nextToken || null;

        if(nextToken !== null){
            assignToken(options, nextToken);
        }

        return loader(options).then(result => {
            const {
                items,
                nextToken,
            } = extractProps(result);

            if(nextToken == null) {
                return Promise.resolve(objects.concat(items));
            }

            return listAll(options, objects.concat(items), nextToken);
        });
    };

    return function(options) {
        return listAll(options || {}, []);
    }
};

module.exports = cursorHelper;