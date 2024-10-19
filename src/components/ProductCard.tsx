import { Card, Image, Text, Group, Badge, Button } from "@mantine/core";
import classes from "./productCard.module.css";

export default function productCard() {
  return (
    <Card withBorder radius="md" className={classes.card} w={300} m={"10 auto"}>
      <Card.Section className={classes.imageSection}>
        <Image src="https://i.imgur.com/ZL52Q2D.png" alt="Tesla Model S" />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>Tesla Model S</Text>
        </div>
        <Badge variant="outline">25% off</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Basic configuration
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              $168.00
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            Buy now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
