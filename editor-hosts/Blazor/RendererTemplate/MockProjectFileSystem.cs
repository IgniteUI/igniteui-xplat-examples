using Microsoft.AspNetCore.Razor.Language;
using System.Collections.Generic;
using System;
using System.IO;
using System.Text;

internal class MockProjectFileSystem : RazorProjectFileSystem
{
    private readonly Dictionary<string, RazorProjectItem> _items = new Dictionary<string, RazorProjectItem>();

    public MockProjectFileSystem()
    {
    }

    public void Add(RazorProjectItem item)
    {
        _items.Add(item.FilePath, item);
    }

    public void Remove(RazorProjectItem item)
    {
        _items.Remove(item.FilePath);
    }

    public override IEnumerable<RazorProjectItem> EnumerateItems(string basePath)
    {
        throw new NotImplementedException();
    }

    public override RazorProjectItem GetItem(string path)
    {
        return GetItem(path, fileKind: null);
    }

    public override RazorProjectItem GetItem(string path, string fileKind)
    {
        if (!_items.TryGetValue(path, out var value))
        {
            throw new InvalidOperationException("invalid path:" + path);
        }

        return value;
    }
}

internal class MockRazorProjectItem : RazorProjectItem
{
    private string _filePath;
    private string _basePath = "/";

    public MockRazorProjectItem(
        string filePath,
        string basePath = null,
        string fileKind = null)
    {
        Content = "";
        _filePath = filePath;
        if (basePath != null)
        {
            _basePath = basePath;
        }
        if (fileKind != null)
        {
            _fileKind = fileKind;
        }
        else
        {
            _fileKind = base.FileKind;
        }        
    }

    public override string BasePath
    {
        get
        {
            return _basePath;
        }
    }

    private string _fileKind;
    public override string FileKind
    {
        get
        {
            return _fileKind;
        }
    }

    public override string FilePath
    {
        get
        {
            return _filePath;
        }
    }

    public override string PhysicalPath 
    { 
        get
        {
            return null;
        }
    }

    public override string RelativePhysicalPath
    {
        get
        {
            return null;
        }
    }

    public override bool Exists
    {
        get
        {
            return true;
        }
    }

    public string Content 
    { 
        get; set; 
    }
    public override Stream Read()
    {
        var preamble = Encoding.UTF8.GetPreamble();
        var contentBytes = Encoding.UTF8.GetBytes(Content);
        var buffer = new byte[preamble.Length + contentBytes.Length];
        preamble.CopyTo(buffer, 0);
        contentBytes.CopyTo(buffer, preamble.Length);

        var stream = new MemoryStream(buffer);

        return stream;
    }
}