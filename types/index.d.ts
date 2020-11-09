// Minimum TypeScript Version: 3.0

declare namespace similarity {
    interface Options {
        /**
         * treat casing differences as differences
         */
        sensitive?: boolean
    }
}

declare function similarity(left: string, right: string, options?: similarity.Options): number

export = similarity
