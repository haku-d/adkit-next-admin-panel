'use client';
import { Card, Button, Flex, Tooltip, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function DisabledButtons() {
  return (
    <Card title="DEFAULT" style={{ marginBottom: 16 }}>
      <Flex gap="small" align="flex-start" vertical>
        <Flex gap="small">
          <Button type="primary">Primary</Button>
          <Button type="primary" disabled>
            Primary(disabled)
          </Button>
        </Flex>
        <Flex gap="small">
          <Button>Default</Button>
          <Button disabled>Default(disabled)</Button>
        </Flex>
        <Flex gap="small">
          <Button type="dashed">Dashed</Button>
          <Button type="dashed" disabled>
            Dashed(disabled)
          </Button>
        </Flex>
        <Flex gap="small">
          <Button type="text">Text</Button>
          <Button type="text" disabled>
            Text(disabled)
          </Button>
        </Flex>
        <Flex gap="small">
          <Button type="link">Link</Button>
          <Button type="link" disabled>
            Link(disabled)
          </Button>
        </Flex>
        <Flex gap="small">
          <Button type="primary" href="https://ant.design/index-cn">
            Href Primary
          </Button>
          <Button type="primary" href="https://ant.design/index-cn" disabled>
            Href Primary(disabled)
          </Button>
        </Flex>
        <Flex gap="small">
          <Button danger>Danger Default</Button>
          <Button danger disabled>
            Danger Default(disabled)
          </Button>
        </Flex>
        <Flex gap="small">
          <Button danger type="text">
            Danger Text
          </Button>
          <Button danger type="text" disabled>
            Danger Text(disabled)
          </Button>
        </Flex>
        <Flex gap="small">
          <Button type="link" danger>
            Danger Link
          </Button>
          <Button type="link" danger disabled>
            Danger Link(disabled)
          </Button>
        </Flex>
        <Flex gap="small" className="site-button-ghost-wrapper">
          <Button ghost>Ghost</Button>
          <Button ghost disabled>
            Ghost(disabled)
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
