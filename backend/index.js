import express from 'express';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSSequelize from '@adminjs/sequelize';

// Register the Sequelize adapter for AdminJS
AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const PORT = 3001;

const start = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // 1. Setup SQLite Database via Sequelize
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './civicpulse.sqlite',
    logging: false,
  });

  // 2. Define the Issue Model
  const Issue = sequelize.define('Issue', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Open', 'In Progress', 'Fixed', 'Rejected'),
      defaultValue: 'Open',
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      defaultValue: 'Anonymous',
    },
    upvotes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  // Sync DB
  await sequelize.sync({ force: false });

  // 3. Setup AdminJS
  const adminOptions = {
    resources: [
      {
        resource: Issue,
        options: {
          properties: {
            description: { type: 'textarea' }
          }
        }
      }
    ],
    rootPath: '/admin',
    branding: {
      companyName: 'CivicPulse Admin',
      softwareBrothers: false,
    },
  };

  const admin = new AdminJS(adminOptions);
  
  // Create admin router
  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  // 4. Implement Public REST API
  
  // GET all issues
  app.get('/api/issues', async (req, res) => {
    try {
      const issues = await Issue.findAll({ order: [['createdAt', 'DESC']] });
      res.json(issues);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch issues' });
    }
  });

  // POST create new issue
  app.post('/api/issues', async (req, res) => {
    try {
      const { title, description, category, location, reporterName } = req.body;
      const issue = await Issue.create({
        title,
        description,
        category,
        location,
        author: reporterName || 'Anonymous',
      });
      res.status(201).json(issue);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create issue' });
    }
  });

  // POST upvote issue
  app.post('/api/issues/:id/upvote', async (req, res) => {
    try {
      const issue = await Issue.findByPk(req.params.id);
      if (!issue) return res.status(404).json({ error: 'Issue not found' });
      
      issue.upvotes += 1;
      await issue.save();
      
      res.json(issue);
    } catch (err) {
      res.status(500).json({ error: 'Failed to upvote' });
    }
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`Backend server started on http://localhost:${PORT}`);
    console.log(`Admin panel available at http://localhost:${PORT}/admin`);
  });
};

start();
