(function (Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This example must run unsandboxed');
  }

  class ChrOrdExtension {
    getInfo() {
      return {
        id: 'chrordextension',
        name: 'Chr/Ord Extension',
        blocks: [
          {
            opcode: 'chr',
            blockType: Scratch.BlockType.REPORTER,
            text: 'chr [NUMBER]',
            arguments: {
              NUMBER: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '65'
              }
            }
          },
          {
            opcode: 'ord',
            blockType: Scratch.BlockType.REPORTER,
            text: 'ord [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'A'
              }
            }
          }
        ]
      };
    }

    chr(args) {
      return String.fromCharCode(args.NUMBER);
    }

    ord(args) {
      return args.STRING.charCodeAt(0);
    }
  }

  Scratch.extensions.register(new ChrOrdExtension());
})(Scratch);