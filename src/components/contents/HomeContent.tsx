import React from 'react';
import ReactMarkdown from 'react-markdown';
import useReadme from '@/hooks/useGetLatestReadme';
import {
  Avatar,
  Card,
  Loader,
  createStyles,
  Grid,
  Text,
  Paper,
  Button,
} from '@mantine/core';
import { IconMail } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
    }`,
  },
  iconEmail: {
    marginTop: 2,
  },
}));

export function HomeContent() {
  const { classes } = useStyles();
  const { readme, loading, error } = useReadme();
  console.log(readme);

  return (
    <>
      <Card p="xl" className={classes.card}>
        <Grid>
          <Grid.Col sm={12} lg={3}>
            <Paper>
              <Avatar
                size={120}
                radius={120}
                mx="auto"
                src="https://avatars.githubusercontent.com/u/61037397?v=1"
              />
              <Text align="center" size="lg" weight={800} mt="md">
                Kasjful Kurniawan
              </Text>
              <Text align="center" size="sm">
                Fullstack Developer
              </Text>

              <Button
                leftIcon={<IconMail />}
                fullWidth
                mt={20}
                size="sm"
                variant="outline"
              >
                Mail me!
              </Button>
            </Paper>
          </Grid.Col>
          <Grid.Col sm={12} lg={9}>
            {loading || (error && <Loader />)}
            {!loading && <ReactMarkdown>{readme as string}</ReactMarkdown>}
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
}
