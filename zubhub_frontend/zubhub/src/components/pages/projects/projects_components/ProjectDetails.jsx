import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "../../infos/ErrorPage";
import LoadingPage from "../../infos/LoadingPage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ClapIcon, { ClapBorderIcon } from "../../../../assets/js/icons/ClapIcon";
import CommentIcon from "../../../../assets/js/icons/CommentIcon";
import VisibilityIcon from "@material-ui/icons/Visibility";
import nFormatter from "../../../../assets/js/nFormatter";
import dFormatter from "../../../../assets/js/dFormatter";
import Typography from "@material-ui/core/Typography";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    flex: "1 0 auto",
  },
  projectDetailHeaderStyle: {
    paddingTop: "1.5em",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0), 0px 1px 1px 0px rgba(0,0,0,0), 0px 1px 3px 0px rgba(0,0,0,0)",
    background: "rgba(255,204,0,1)",
    background:
      "-moz-linear-gradient(top, rgba(255,204,0,1) 0%, rgba(255,229,133,1) 25%, rgba(255,255,255,1) 61%, rgba(255,255,255,1) 100%)",
    background:
      "-webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,204,0,1)), color-stop(25%, rgba(255,229,133,1)), color-stop(61%, rgba(255,255,255,1)), color-stop(100%, rgba(255,255,255,1)))",
    background:
      "-webkit-linear-gradient(top, rgba(255,204,0,1) 0%, rgba(255,229,133,1) 25%, rgba(255,255,255,1) 61%, rgba(255,255,255,1) 100%)",
    background:
      "-o-linear-gradient(top, rgba(255,204,0,1) 0%, rgba(255,229,133,1) 25%, rgba(255,255,255,1) 61%, rgba(255,255,255,1) 100%)",
    background:
      "-ms-linear-gradient(top, rgba(255,204,0,1) 0%, rgba(255,229,133,1) 25%, rgba(255,255,255,1) 61%, rgba(255,255,255,1) 100%)",
    background:
      "linear-gradient(to bottom, rgba(255,204,0,1) 0%, rgba(255,229,133,1) 25%, rgba(255,255,255,1) 61%, rgba(255,255,255,1) 100%)",
    filter:
      "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffcc00', endColorstr='#ffffff', GradientType=0 )",
  },
  titleStyle: {
    fontWeight: 900,
    textAlign: "center",
  },
  metaInfoStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  creatorProfileStyle: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1em",
    "& a": {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down("500")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  creatorAvatarStyle: {
    display: "inline-block",
    boxShadow: `0 3px 5px 2px rgba(0, 0, 0, .12)`,
    backgroundColor: "#ffffff",
    marginRight: "0.5em",
  },
  headerStyle: {
    maxWidth: "1000px",
  },
  detailStyle: {
    maxWidth: "1000px",
  },
  videoWrapperStyle: {
    backgroundColor: "black",
    marginBottom: "1em",
    height: "100%",
    paddingBottom: "56.25%",
    [theme.breakpoints.down("1080")]: {
      height: 0,
    },
    [theme.breakpoints.down("959")]: {
      paddingBottom: "56.25%",
    },
  },
  iframeStyle: {
    position: "absolute",
    borderStyle: "none",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("959")]: {
      width: "100%",
      height: "100%",
    },
    zIndex: 1,
  },
  actionBoxStyle: {
    backgroundColor: "#00B8C4",
    "&:hover": {
      backgroundColor: "#03848C",
    },
    borderRadius: "15px",
    position: "absolute",
    top: "0",
    right: "-4.5em",
    width: "3.5em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    [theme.breakpoints.down("1080")]: {
      position: "static",
      height: "3.5em",
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  },
  actionBoxButtonStyle: {
    margin: "0.5em",
    display: "flex",
    maxWidth: "100%",
    minWidth: 0,
    flexDirection: "column",
    "& span": { display: "flex", flexDirection: "column" },
    [theme.breakpoints.down("1080")]: {
      flexDirection: "row",
      marginBottom: "1em",
      "& span": {
        flexDirection: "row",
      },
    },
    textAlign: "center",
    color: "white",
    "& MuiFab-root:hover": {
      color: "#F2F2F2",
    },
    "& svg": {
      fill: "white",
    },
    "& svg:hover": {
      fill: "#F2F2F2",
    },
  },
  sliderBoxStyle: {
    [theme.breakpoints.down("1080")]: {
      width: "90%",
    },
  },
  carouselImageStyle: {
    borderRadius: "15px",
    objectFit: "cover",
    width: "180px",
    height: "200px",
  },
  enlargedImageDialogStyle: {
    display: "flex",
    justifyContent: "center",
  },
  enlargedImageStyle: {
    alignSelf: "center",
    width: "80%",
    maxWidth: "600px",
    height: "auto",
  },
  descriptionHeadingStyle: {
    marginTop: "1em",
    fontWeight: 900,
    fontSize: "2.2rem",
  },
  descriptionBodyStyle: {
    fontSize: "1.5rem",
    marginBottom: "0.7em",
  },
  materialsUsedStyle: {
    display: "inline-block",
    fontSize: "1.5rem",
    padding: "0.2em 0.5em",
    color: "#00B8C4",
    borderRadius: "15px",
    border: "1px solid #00B8C4",
    marginRight: "0.5em",
    marginBottom: "0.5em",
  },
  commentSectionStyle: {
    maxWidth: "1000px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2.5em",
    marginBottom: "2.5em",
    borderRadius: "15px",
    backgroundColor: "#E4E4E4",
  },
  commentAvatarStyle: {
    backgroundColor: "#c4c4c4",
    marginRight: "1em",
  },
  commentsStyle: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    backgroundColor: "white",
    maxWidth: "1000px",
    width: "100%",
    fontSize: "1.5rem",
    borderRadius: "15px",
    boxShadow: "0 1px 4px rgba(0,0,0,.06)",
    border: "1px solid rgba(0,0,0,.1)",
    margin: "0.8em",
  },
  commentMetaStyle: {
    display: "flex",
    marginBottom: "1em",
  },
  customLabelStyle: {
    "&.MuiFormLabel-root.Mui-focused": {
      color: "#00B8C4",
    },
  },

  primaryButton: {
    backgroundColor: "#00B8C4",
    borderRadius: 15,
    color: "white",
    marginLeft: "1em",
    "&:hover": {
      backgroundColor: "#03848C",
    },
  },
  secondaryButton: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "#00B8C4",
    color: "#00B8C4",
    marginLeft: "1em",
    "&:hover": {
      color: "#03848C",
      borderColor: "#03848C",
      backgroundColor: "#F2F2F2",
    },
  },
  secondaryLink: {
    color: "#00B8C4",
    "&:hover": {
      color: "#03848C",
    },
  },

  materialsUsedViewStyle: {
    padding: "0.5em",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textDecorationNone: {
    textDecoration: "none",
  },
  floatRight: { float: "right" },
  displayNone: { display: "none" },
  largeLabel: {
    fontSize: "1.3rem",
  },
  positionRelative: { position: "relative" },
  positionAbsolute: { position: "absolute" },
  marginBottom1em: { marginBottom: "1em" },
  errorBox: {
    width: "100%",
    padding: "1em",
    borderRadius: 6,
    borderWidth: "1px",
    borderColor: "#a94442",
    backgroundColor: "#ffcdd2",
  },
  error: {
    color: "#a94442",
  },
});

const sliderSettings = (images_num) => ({
  className: "center slider",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  dots: false,
  autoplay: true,
  speed: 500,
  slidesToShow: 4 > images_num ? images_num : 4,
  slidesToScroll: 4 > images_num ? images_num : 4,
  focusOnSelect: true,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3 > images_num ? images_num : 3,
        slidesToScroll: 3 > images_num ? images_num : 3,
        infinite: true,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2 > images_num ? images_num : 2,
        slidesToScroll: 2 > images_num ? images_num : 2,
        infinite: true,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1 > images_num ? images_num : 1,
        slidesToScroll: 1 > images_num ? images_num : 1,
        infinite: true,
      },
    },
  ],
});

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        height: "200px",
        width: "30px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0 15px 15px 0",
        background: "#767474",
        zIndex: "10",
        boxShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
        backgroundColor: "#00B8C4",
        "&:hover": {
          backgroundColor: "#03848C",
        },
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        height: "200px",
        width: "30px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px 0 0 15px",
        background: "#767474",
        zIndex: "10",
        boxShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
        backgroundColor: "#00B8C4",
        "&:hover": {
          backgroundColor: "#03848C",
        },
      }}
      onClick={onClick}
    />
  );
}

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.props.api
      .get_project({
        id: this.props.match.params.id,
        token: this.props.auth.token,
      })
      .then((res) => {
        if (res.title) {
          return this.setState({ project: res, loading: false });
        } else {
          res = Object.keys(res)
            .map((key) => res[key])
            .join("\n");
          throw new Error(res);
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
        toast.warning(error.message);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.project !== prevState.project) {
      this.constructCommentBox();
    }
  }

  componentWillUnmount() {
    try {
      this.commentText.removeEventListener(
        "focus",
        this.handleCommentTextFocus
      );
    } catch {}

    try {
      document.removeEventListener("click", this.handleDocumentClick);
    } catch {}
  }

  toggle_like = (e, id) => {
    e.preventDefault();
    if (!this.props.auth.token) {
      this.props.history.push("/login");
    } else {
      this.props.api
        .toggle_like({ id, token: this.props.auth.token })
        .then((res) => {
          if (res.id) {
            return this.setState({ project: res });
          } else {
            res = Object.keys(res)
              .map((key) => res[key])
              .join("\n");
            throw new Error(res);
          }
        })
        .catch((error) => {
          this.setState({ loading: false });
          if (error.message.startsWith("Unexpected")) {
            toast.warning(
              this.props.t("projectDetails.others.errors.unexpected")
            );
          } else {
            toast.warning(error.message);
          }
        });
    }
  };

  toggle_follow = (id) => {
    if (!this.props.auth.token) {
      this.props.history.push("/login");
    } else {
      this.props.api
        .toggle_follow({ id, token: this.props.auth.token })
        .then((res) => {
          if (res.id) {
            let { project } = this.state;
            if (project.creator.id === res.id) {
              project.creator = res;
            }

            return this.setState({ project });
          } else {
            res = Object.keys(res)
              .map((key) => res[key])
              .join("\n");
            throw new Error(res);
          }
        })
        .catch((error) => {
          this.setState({ loading: false });
          if (error.message.startsWith("Unexpected")) {
            toast.warning(
              this.props.t("projectDetails.others.errors.unexpected")
            );
          } else {
            toast.warning(error.message);
          }
        });
    }
  };

  toggle_save = (e, id) => {
    e.preventDefault();
    if (!this.props.auth.token) {
      this.props.history.push("/login");
    } else {
      this.props.api
        .toggle_save({
          id,
          token: this.props.auth.token,
        })
        .then((res) => {
          if (res.id) {
            return this.setState({ project: res });
          } else {
            res = Object.keys(res)
              .map((key) => res[key])
              .join("\n");
            throw new Error(res);
          }
        })
        .catch((error) => {
          this.setState({ loading: false });
          if (error.message.startsWith("Unexpected")) {
            toast.warning(
              this.props.t("projectDetails.others.errors.unexpected")
            );
          } else {
            toast.warning(error.message);
          }
        });
    }
  };

  handleOpenEnlargedImageDialog = (e) => {
    let image_url = e.currentTarget.getAttribute("src");
    let openEnlargedImageDialog = !this.state.openEnlargedImageDialog;
    this.setState({ enlargedImageUrl: image_url, openEnlargedImageDialog });
  };

  buildMaterialsUsedComponent = () => {
    let arr = this.state.project.materials_used.split(",");
    return arr.map((material, index) => (
      <Typography
        component="span"
        className={this.props.classes.materialsUsedStyle}
      >
        {material}
      </Typography>
    ));
  };

  add_comment = (e) => {
    e.preventDefault();
    if (!this.props.auth.token) {
      this.props.history.push("/login");
    } else {
      let textarea = document.querySelector("#comment");
      let comment_text = textarea.value;
      this.props.api
        .add_comment({
          id: this.state.project.id,
          token: this.props.auth.token,
          text: comment_text,
        })
        .then((res) => {
          if (res.id) {
            textarea.value = "";
            return this.setState({ project: res });
          } else {
            res = Object.keys(res)
              .map((key) => res[key])
              .join("\n");
            throw new Error(res);
          }
        })
        .catch((error) => {
          this.setState({ loading: false });
          if (error.message.startsWith("Unexpected")) {
            toast.warning(
              this.props.t("projectDetails.others.errors.unexpected")
            );
          } else {
            toast.warning(error.message);
          }
        });
    }
  };

  constructCommentBox = () => {
    this.commentBox = document.querySelector(".comment-box");
    this.commentText = document.querySelector(".comment-text");
    this.commentAuthorName = document.querySelector(
      ".comment-box .comment-meta__a"
    );
    this.commentPublishButton = document.querySelector(
      ".comment-publish-button"
    );
    this.commentText.addEventListener("focus", this.handleCommentTextFocus);

    document.addEventListener("click", this.handleDocumentClick);
  };

  handleCommentTextFocus = () => {
    this.commentBox.classList.remove("comment-collapsed");
    this.commentBox.classList.add("comment");
    this.commentAuthorName.classList.remove("display-none");
    this.commentPublishButton.classList.remove("display-none");
  };

  handleDocumentClick = (e) => {
    if (
      ![this.commentBox, this.commentPublishButton, this.commentText].includes(
        e.target
      )
    ) {
      this.commentBox.classList.remove("comment");
      this.commentBox.classList.add("comment-collapsed");
      this.commentAuthorName.classList.add("display-none");
      this.commentPublishButton.classList.add("display-none");
    }
  };

  render() {
    let {
      project,
      loading,
      enlargedImageUrl,
      openEnlargedImageDialog,
    } = this.state;
    let { classes, t } = this.props;
    if (loading) {
      return <LoadingPage />;
    } else if (Object.keys(project).length > 0) {
      return (
        <>
          <Box className={classes.root}>
            <Paper className={classes.projectDetailHeaderStyle}>
              <Container className={classes.headerStyle}>
                <Typography
                  className={classes.titleStyle}
                  variant="h3"
                  gutterBottom
                >
                  {project.title}
                </Typography>
                <Grid container justify="space-around">
                  <Grid item className={classes.creatorProfileStyle}>
                    <Link
                      className={clsx(classes.textDecorationNone)}
                      to={`/creators/${project.creator.username}`}
                    >
                      <Avatar
                        className={classes.creatorAvatarStyle}
                        src={project.creator.avatar}
                        alt={project.creator.username}
                      />
                      <Typography color="textSecondary" component="span">
                        {project.creator.username}
                      </Typography>
                    </Link>
                    {project.creator.id !== this.props.auth.id ? (
                      <Button
                        variant="contained"
                        className={classes.primaryButton}
                        onClick={(e, id = project.creator.id) =>
                          this.toggle_follow(id)
                        }
                      >
                        {project.creator.followers.includes(this.props.auth.id)
                          ? t("projectDetails.project.creator.unfollow")
                          : t("projectDetails.project.creator.follow")}
                      </Button>
                    ) : null}
                  </Grid>
                </Grid>
              </Container>
              <Container className={classes.detailStyle}>
                <Grid container justify="center">
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    className={clsx(
                      classes.positionRelative,
                      classes.marginBottom1em
                    )}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      className={clsx(
                        classes.videoWrapperStyle,
                        classes.positionRelative
                      )}
                    >
                      {project.video ? (
                        <iframe
                          title={project.title}
                          className={classes.iframeStyle}
                          src={project.video}
                        ></iframe>
                      ) : project.images.length > 0 ? (
                        <img
                          className={classes.iframeStyle}
                          src={project.images[0].image_url}
                          alt={project.title}
                        />
                      ) : null}
                    </Grid>
                    <Box className={classes.actionBoxStyle}>
                      <Button
                        className={classes.actionBoxButtonStyle}
                        size="small"
                        aria-label={t(
                          "projectDetails.aria_labels.like_button.label"
                        )}
                        variant="extended"
                        onClick={(e, id = project.id) =>
                          this.toggle_like(e, id)
                        }
                      >
                        {project.likes.includes(this.props.auth.id) ? (
                          <ClapIcon
                            arial-label={t(
                              "projectDetails.aria_labels.like_button.unlilke"
                            )}
                          />
                        ) : (
                          <ClapBorderIcon
                            arial-label={t(
                              "projectDetails.aria_labels.like_button.like"
                            )}
                          />
                        )}
                        <Typography>
                          {nFormatter(project.likes.length)}
                        </Typography>
                      </Button>
                      <Button
                        className={classes.actionBoxButtonStyle}
                        size="small"
                        aria-label={t(
                          "projectDetails.aria_labels.save_button.label"
                        )}
                        onClick={(e, id = project.id) =>
                          this.toggle_save(e, id)
                        }
                      >
                        {project.saved_by.includes(this.props.auth.id) ? (
                          <BookmarkIcon
                            aria-label={t(
                              "projectDetails.aria_labels.save_button.unsave"
                            )}
                          />
                        ) : (
                          <BookmarkBorderIcon
                            aria-label={t(
                              "projectDetails.aria_labels.save_button.save"
                            )}
                          />
                        )}
                      </Button>
                      <Typography
                        color="textSecondary"
                        variant="caption"
                        component="span"
                        className={classes.actionBoxButtonStyle}
                      >
                        <VisibilityIcon />
                        <Typography>{project.views_count}</Typography>
                      </Typography>
                    </Box>
                  </Grid>
                  {project.images.length > 0 ? (
                    <Grid item xs={12} sm={12} md={12} align="center">
                      <Box className={classes.sliderBoxStyle}>
                        <Slider {...sliderSettings(project.images.length)}>
                          {project.images.map((image) => (
                            <div>
                              <img
                                key={image.public_id}
                                className={classes.carouselImageStyle}
                                src={image.image_url}
                                alt={image.public_id}
                                onClick={this.handleOpenEnlargedImageDialog}
                              />
                            </div>
                          ))}
                        </Slider>
                      </Box>
                    </Grid>
                  ) : null}
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography
                      variant="h5"
                      className={classes.descriptionHeadingStyle}
                    >
                      {t("projectDetails.project.description")}
                    </Typography>
                    <Typography
                      className={classes.descriptionBodyStyle}
                      color="textSecondary"
                    >
                      {project.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography
                      variant="h5"
                      className={classes.descriptionHeadingStyle}
                    >
                      {t("projectDetails.project.materials")}
                    </Typography>
                    <Typography
                      className={classes.descriptionBodyStyle}
                      color="textSecondary"
                    >
                      {this.buildMaterialsUsedComponent()}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
              <Container className={classes.commentSectionStyle}>
                <Typography
                  variant="h5"
                  className={classes.descriptionHeadingStyle}
                >
                  <CommentIcon /> {nFormatter(project.comments.length)}{" "}
                  {t("projectDetails.project.comments.label")}
                </Typography>
                <Box className="comment-box comment-collapsed">
                  <Box className="comment-meta">
                    <Link
                      className={clsx(classes.textDecorationNone)}
                      to={`/creators/${this.props.auth.username}`}
                    >
                      {this.props.auth.token ? (
                        <Avatar
                          className={classes.commentAvatarStyle}
                          src={`https://robohash.org/${this.props.auth.username}`}
                          alt={this.props.auth.username}
                        />
                      ) : null}
                    </Link>
                    <Link
                      className={clsx(
                        classes.textDecorationNone,
                        "comment-meta__a",
                        "display-none"
                      )}
                      to={`/creators/${this.props.auth.username}`}
                    >
                      {this.props.auth.username}
                    </Link>
                  </Box>
                  <form className="comment-form">
                    <textarea
                      className="comment-text"
                      name="comment"
                      id="comment"
                      placeholder={`${t(
                        "projectDetails.project.comments.write"
                      )} ...`}
                    ></textarea>
                    <Button
                      onClick={this.add_comment}
                      className={clsx(
                        classes.primaryButton,
                        "comment-publish-button",
                        "display-none"
                      )}
                      variant="contained"
                    >
                      {t("projectDetails.project.comments.action")}
                    </Button>
                  </form>
                </Box>
                {project.comments.map((comment) => (
                  <Box className={classes.commentsStyle} key={comment.id}>
                    <Link
                      className={clsx(
                        classes.textDecorationNone,
                        classes.commentMetaStyle
                      )}
                      to={`/creators/${this.props.auth.username}`}
                    >
                      <Avatar
                        className={classes.commentAvatarStyle}
                        src={`https://robohash.org/${comment.creator}`}
                        alt={comment.creator}
                      />
                      <Box>
                        <Typography color="textPrimary">
                          {comment.creator}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {dFormatter(comment.created_on)}
                        </Typography>
                      </Box>
                    </Link>

                    {comment.text}
                  </Box>
                ))}
              </Container>
            </Paper>
          </Box>
          <Dialog
            PaperProps={{
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            }}
            className={classes.enlargedImageDialogStyle}
            open={openEnlargedImageDialog}
            onClose={() =>
              this.setState({
                openEnlargedImageDialog: !openEnlargedImageDialog,
              })
            }
            aria-labelledby={t("projectDetails.aria_labels.image_dialog")}
          >
            <img
              className={classes.enlargedImageStyle}
              src={enlargedImageUrl}
              alt={`${project.title}`}
            />
          </Dialog>
        </>
      );
    } else {
      return <ErrorPage error={t("pageDetails.others.errors.unexpected")} />;
    }
  }
}

ProjectDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ProjectDetails));