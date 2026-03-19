const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-gradient font-display font-semibold">
            Ayush Mishra
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
