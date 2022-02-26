import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import "./ProjectCard.css";

const projectsData = require("../../utils/projectsData.json");

export const ProjectCard = () => {
  return (
    <Grid item xs={12}>
      <Grid container spacing={4}>
        {projectsData.map((project) => (
          <Grid item key={project.title}>
            <Card className="project-card" sx={{ maxWidth: 350 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={require("../../assets/images/" + project.image)}
                //         {require('../../../assets/images/website/homepage/' +
                // item.image +
                // '.png')}
                sx={{ objectFit: "contain", width: "100%" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="btn"
                  type="submit"
                  variant="contained"
                  size="small"
                  href={project.link ? project.link : project.walkthroughVideo}
                  target="_blank"
                >
                  {project.link ? "link" : "video"}
                </Button>
                <Button
                  className="btn"
                  type="submit"
                  variant="contained"
                  size="small"
                  href={project.repo}
                  target="_blank"
                >
                  View Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
