const queryBuilder = require("../../src/helpers/queryBuilder");

describe("queryBuilder", () => {
    describe("with invalid params", () => {
        it("return an empty string", () => {
            const result = queryBuilder(undefined);
            expect(result).toEqual("");
        });

        it("return an empty string when the param is an empty object", () => {
            const result = queryBuilder({});
            expect(result).toEqual("");
        });
    });

    describe("with valid params", () => {
        it("builds a query string", () => {
            const params = {
                foo: "bar",
            }

            const result = queryBuilder(params);
            expect(result).toEqual("foo=bar");
        });

        it("seperates params by & when there are multiple values", () => {
            const params = {
                one: "1",
                two: "2",
                three: "3"
            }

            const result = queryBuilder(params);
            expect(result).toEqual("one=1&two=2&three=3");
        });
    });
});