module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "SwitchStatement",
            "discriminant": {
                "type": "Identifier",
                "name": "a",
                "range": [
                    8,
                    9
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 8
                    },
                    "end": {
                        "line": 1,
                        "column": 9
                    }
                }
            },
            "cases": [
                {
                    "type": "SwitchCase",
                    "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "range": [
                            22,
                            23
                        ],
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 9
                            },
                            "end": {
                                "line": 2,
                                "column": 10
                            }
                        }
                    },
                    "consequent": [
                        {
                            "type": "BreakStatement",
                            "label": null,
                            "range": [
                                33,
                                39
                            ],
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 8
                                },
                                "end": {
                                    "line": 3,
                                    "column": 14
                                }
                            }
                        }
                    ],
                    "range": [
                        17,
                        39
                    ],
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 4
                        },
                        "end": {
                            "line": 3,
                            "column": 14
                        }
                    },
                    "trailingComments": [
                        {
                            "type": "Line",
                            "value": "no default",
                            "range": [
                                44,
                                56
                            ],
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 4
                                },
                                "end": {
                                    "line": 4,
                                    "column": 16
                                }
                            }
                        }
                    ]
                }
            ],
            "range": [
                0,
                58
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 5,
                    "column": 1
                }
            }
        }
    ],
    "range": [
        0,
        58
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 5,
            "column": 1
        }
    },
    "comments": [
        {
            "type": "Line",
            "value": "no default",
            "range": [
                44,
                56
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 16
                }
            }
        }
    ]
};
