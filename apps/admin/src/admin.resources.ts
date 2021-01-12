import { User } from '@app/db/user/user.entity';
import { LogicTest } from '@app/db/logicTest/logicTest.entity';
import { TypingTest } from '@app/db/typingTest/typingTest.entity';
import { PersonalityTest } from '@app/db/personalityTest/personalityTest.entity';
import AdminBro, { ResourceWithOptions } from 'admin-bro';
import uploadFeature from '@admin-bro/upload';
import CustomFileProvider from './helpers/CustomFileProvider';

export const UserResource: ResourceWithOptions = {
  resource: User,
  options: {},
}

export const LogicTestResource: ResourceWithOptions = {
  resource: LogicTest,
  options: {
    listProperties:['id','title','img.file','answer_type','answers','correct_answers'],
    properties:{
      img: {
        isVisible: false,
      },
      "img.file":{
        components:{
          show: AdminBro.bundle('./jsx-components/ShowImg'),
        }
      }
    }
  },
  features: [uploadFeature({
    properties:{
      file: `img.file`,
      key: `img.key`,
      filePath: `img.filePath`,
      bucket: `img.bucket`,
      mimeType: `img.mimeType`,
      size: `img.size`,
      filename: `img.filename`
    },
    provider: new CustomFileProvider(),
  })]
};

export const PersonalityTestResource: ResourceWithOptions = {
  resource: PersonalityTest,
  options: {
    listProperties:['id','title','img.file','answer_type','answers'],
    properties:{
      img: {
        isVisible: false,
      },
      "img.file":{
        components:{
          show: AdminBro.bundle('./jsx-components/ShowImg'),
        }
      }
    }
  },
  features: [uploadFeature({
    properties:{
      file: `img.file`,
      key: `img.key`,
      filePath: `img.filePath`,
      bucket: `img.bucket`,
      mimeType: `img.mimeType`,
      size: `img.size`,
      filename: `img.filename`
    },
    provider: new CustomFileProvider(),
  })]
}

export const TypingTestResource: ResourceWithOptions = {
  resource: TypingTest,
  options: {},
}

const AdminBroResources = [
  UserResource,
  LogicTestResource,
  TypingTestResource,
  PersonalityTestResource,
];

export default AdminBroResources;