/*
    Project: [Project Name]
    Copyright (C) 2024-2025 [Author]

    File: karma.conf.js
    Description: Configuration for Karma test runner.
    Author: [Author] <author@email.com>

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine", "@angular-devkit/build-angular"],
        plugins: [
            require("karma-jasmine"),
            require("karma-chrome-launcher"),
            require("karma-jasmine-html-reporter"),
            require("karma-coverage"),
            require("@angular-devkit/build-angular/plugins/karma"),
        ],
        client: {
            jasmine: {},
        },
        jasmineHtmlReporter: {
            suppressAll: true,
        },
        coverageReporter: {
            dir: require("path").join(__dirname, "./coverage/template-angular"),
            subdir: ".",
            reporters: [{ type: "html" }, { type: "text-summary" }],
        },
        reporters: ["progress", "kjhtml"],
        browsers: ["ChromeHeadless"],
        restartOnFileChange: true,
    });
};
