import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

type Answers = {
  path: string;
  story?: boolean;
  test?: boolean;
  'dry-run'?: boolean;
};

export const cli = async (processArgv: string[]) => {
  yargs(hideBin(processArgv))
    .usage('Usage: $0 --path="src/components" [--story] [--test]')
    .option('path', {
      alias: 'p',
      describe: 'Path where to generated',
      demandOption: true,
      type: 'string',
    })
    .option('story', {
      alias: 's',
      describe: 'Create additional story file',
      type: 'boolean',
    })
    .option('test', {
      alias: 't',
      describe: 'Create additional test file',
      type: 'boolean',
    })
    .option('dry-run', {
      describe: 'Only display output without generating files',
      type: 'boolean',
    })
    .help()
    .version().argv;
};
