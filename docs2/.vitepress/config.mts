import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Node API for .NET",
  description: "Advanced interoperability between .NET and JavaScript in the same process",
  lang: 'en-US',
  ////base: '/node-api-dotnet/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/images/node-api-dotnet-logo.svg',

    sidebar: [
      { text: 'Overview', link: '/overview' },
      {
        text: 'Get Started',
        items: [
          {
            text: 'JS / .NET interop scenarios',
            link: '/scenarios/index',
            collapsed: false,
            items: [
              { text: 'Dynamic .NET from JS', link: '/scenarios/js-dotnet-dynamic' },
              { text: '.NET module for Node.js', link: '/scenarios/js-dotnet-module' },
              { text: '.NET Native AOT for Node.js', link: '/scenarios/js-aot-module' },
              { text: 'Embedding JS in .NET', link: '/scenarios/dotnet-js' },
            ],
          },
          { 'text': 'Requirements', link: '/requirements' },
          { 'text': 'Example projects', link: '/examples' },
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Type definitions', link: '/features/type-definitions' },
          { text: 'Automatic marshalling', link: '/features/automatic-marshalling' },
          { text: 'JS types in .NET', link: '/features/js-types-in-dotnet' },
          { text: 'JS value scopes', link: '/features/js-value-scopes' },
          { text: '.NET Native AOT', link: '/features/dotnet-native-aot' },
          { text: 'Embedding JS in .NET', link: '/features/embedding-js-in-dotnet' },
          { text: 'How it works', link: '/features/how-it-works' },
          { text: 'Performance', link: '/features/performance' },
          { text: 'Limitations', link: '/features/limitations' },
        ]
      },
      {
        text: 'Reference',
        items: [
          {
            text: 'JS / .NET mappings',
            link: '/marshalling/index',
            collapsed: true,
            items: [
              { text: 'Basic types', link: '/marshalling/basic-types' },
              { text: 'Null & undefined', link: '/marshalling/null-undefined' },
              { text: 'Classes & interfaces', link: '/marshalling/classes-interfaces' },
              { text: 'Structs & tuples', link: '/marshalling/structs-tuples' },
              { text: 'Enums', link: '/marshalling/enums' },
              { text: 'Arrays & collections', link: '/marshalling/arrays-collections' },
              { text: 'Delegates', link: '/marshalling/delegates' },
              { text: 'Streams', link: '/marshalling/streams' },
              { text: 'Other special types', link: '/marshalling/other-types' },
              { text: 'Async & promises', link: '/marshalling/async-promises' },
              { text: 'Generics', link: '/marshalling/generics' },
              { text: 'Extension methods', link: '/marshalling/extension-methods' },
              { text: 'Overloaded methods', link: '/marshalling/overloaded-methods' },
              { text: 'Ref & out parameters', link: '/marshalling/ref-out-params' },
              { text: 'Events', link: '/marshalling/events' },
              { text: 'Exceptions', link: '/marshalling/exceptions' },
              { text: 'Namespaces', link: '/marshalling/namespaces' },
            ],
          },
          { text: 'JavaScript APIs', link: '/reference/js-apis' },
          { text: '.NET APIs', link: '/reference/dotnet-apis' },
          { text: 'MSBuild props & tasks', link: '/reference/msbuild-props-tasks' },
          { text: 'Releases & packages', link: '/reference/releases-packages' },
        ]
      },
      { text: 'Support', link: '/support' },
      { text: 'Contributing', link: '/contributing' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/microsoft/node-api-dotnet' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Released under the MIT license',
      copyright: 'Copyright © 2023-present Microsoft',
    }
  }
})
